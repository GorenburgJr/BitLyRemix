import { LoaderFunctionArgs } from '@remix-run/node';

import AuthForm from '../components/auth/AuthForm'
import { login, signup } from '../data/auth.server';
import { validateCredentials } from '../data/validation.server';
import authStyles from '~/styles/auth.css';

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }: LoaderFunctionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();

  try {
        const email = formData.get('email');
        const password = formData.get('password');

        if (typeof email !== 'string' || typeof password !== 'string') {
        throw new Error('Invalid form submission');
        }

        validateCredentials({ email, password });
  } catch (error) {
    return error;
  }

  try {
    if (authMode === 'login') {
        const email = formData.get('email');
        const password = formData.get('password');

        if (typeof email !== 'string' || typeof password !== 'string') {
        throw new Error('Invalid form submission');
        }

      return await login({ email, password });
    } else {
        const email = formData.get('email');
        const password = formData.get('password');

        if (typeof email !== 'string' || typeof password !== 'string') {
        throw new Error('Invalid form submission');
        }

      return await signup({ email, password });
    }
  } catch (error) {
    if (error.status === 422) {
      return { credentials: error.message };
    }
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}
