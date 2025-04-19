import * as argon2 from 'argon2';
import { createCookieSessionStorage, redirect } from '@remix-run/node';
import * as dotenv from 'dotenv'
import AppDataSource from './database.server'
import { User } from '../../src/entity/User';
dotenv.config()

const UserRepo =  AppDataSource.AppDataSource.manager.getRepository(User)

const SESSION_SECRET:string = process.env.ACCESS_TOKEN_SECRET as string;

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    secrets: [SESSION_SECRET],
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

async function createUserSession(userId:number, redirectPath:string) {
  const session = await sessionStorage.getSession();
  session.set('userId', userId);
  return redirect(redirectPath, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  });
}

export async function getUserFromSession(request:Request) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );

  const userId = session.get('userId');

  if (!userId) {
    return null;
  }

  return userId;
}

export async function destroyUserSession(request:Request) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );

  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
}

export async function requireUserSession(request:Request) {
  const userId = await getUserFromSession(request);

  if (!userId) {
    throw redirect('/auth?mode=login');
  }

  return userId;
}

export async function signup({ email, password }: {email:string, password:string}) {
  const existingUser = await UserRepo.findOneBy({email});

  if (existingUser) {
    const error = new Error(
      'A user with the provided email address exists already.'
    );
    // error.status = 422;
    throw error;
  }

  const passwordHash = await argon2.hash(password)

  const user = await UserRepo.save({email, password: passwordHash});
  return createUserSession(user.id, '/profile');
}

export async function login({ email, password }: {email:string, password:string}) {
  const existingUser = await UserRepo.findOneBy({email});

  if (!existingUser) {
    const error = new Error(
      'Could not log you in, please check the provided credentials.'
    );
    // error.status = 401;
    throw error;
  }
  
  const passwordCorrect = await argon2.verify(existingUser.passwordHash, password)

  if (!passwordCorrect) {
    const error = new Error(
      'Could not log you in, please check the provided credentials.'
    );
    // error.status = 401;
    throw error;
  }

  return createUserSession(existingUser.id, '/expenses');
}
