import { redirect } from '@remix-run/react';
import AuthForm from '../components/auth/AuthForm';
import { getUserFromSession, login, signup } from '../data/auth.server';
import { validateCredentials } from '../data/validation.server';
import authStyles from '../styles/auth.css';
import MainHeader from '~/components/navigation/MainHeader';

export default function AuthPage() {
  return<>
  <nav>
    <MainHeader/>
  </nav>
      <AuthForm /></>
    
}

export async function loader({request}) {
    if(await getUserFromSession(request)) {
      return redirect('/profile')}
    return null
    
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === 'login') {
       return await login(credentials); 
    } else return await signup(credentials);
  } catch (error) {
    return error
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}