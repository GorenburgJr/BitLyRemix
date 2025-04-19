// import * as argon2 from 'argon2';
// import jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv';
// import { User } from '../../src/entity/User';
// import {AppDataSource} from './database.server';


// dotenv.config();

// const UserRepo = AppDataSource.getRepository(User);

// const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
// const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

// const ACCESS_TOKEN_EXPIRY = '15m';
// const REFRESH_TOKEN_EXPIRY = '7d';

// export function generateTokens(userId: number) {
//   const accessToken = jwt.sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
//   const refreshToken = jwt.sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
//   return { accessToken, refreshToken };
// }

// export function verifyAccessToken(token: string): number | null {
//   try {
//     const payload = jwt.verify(token, ACCESS_TOKEN_SECRET) as { userId: number };
//     return payload.userId;
//   } catch {
//     return null;
//   }
// }

// export async function signup({ email, password }: { email: string; password: string }) {
//   const existingUser = await UserRepo.findOneBy({ email });
//   if (existingUser) throw new Error('Email already in use');
//   const passwordHash = await argon2.hash(password);
//   const newUser = UserRepo.create({ email, passwordHash });
//   const user = await UserRepo.save(newUser);
//   return generateTokens(user.id);
// }

// export async function login({ email, password }: { email: string; password: string }) {
//   const user = await UserRepo.findOneBy({ email });
//   if (!user || !(await argon2.verify(user.passwordHash, password))) {
//     throw new Error('Invalid credentials');
//   }
//   return generateTokens(user.id);
// }