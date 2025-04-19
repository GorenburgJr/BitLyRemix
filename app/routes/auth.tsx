import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import AuthForm from '../components/auth/AuthForm';
import { login, signup } from '../data/auth.server';
import { validateCredentials } from '../data/validation.server';
import authStyles from '../styles/auth.css';

export default function AuthPage() {
  return <AuthForm />;
}

// export async function action({ request }: LoaderFunctionArgs) {
//   const url = new URL(request.url);
//   const mode = url.searchParams.get('mode') || 'login';
//   const formData = await request.formData();
//   const email = formData.get('email');
//   const password = formData.get('password');

//   if (typeof email !== 'string' || typeof password !== 'string') {
//     return { error: 'Invalid form data' };
//   }

//   try {
//     validateCredentials({ email, password });

//     const { accessToken, refreshToken } =
//       mode === 'login'
//         ? await login({ email, password })
//         : await signup({ email, password });

//     return redirect('/profile', {
//       headers: {
//         'Set-Cookie': [
//           `accessToken=${accessToken}; HttpOnly; Path=/; SameSite=Lax`,
//           `refreshToken=${refreshToken}; HttpOnly; Path=/; SameSite=Lax`,
//         ],
//       },
//     });
//   } catch (error) {
//     return { error: error.message || 'Authentication failed' };
//   }
// }

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}