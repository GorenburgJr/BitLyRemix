import { useSearchParams } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AuthForm() {
  const [searchParams] = useSearchParams()
  const authMode = searchParams.get('mode') || 'login'

  const submitbtnCaption = authMode === 'login' ? 'Login' : 'Create User'
  const togglebtnCaption = authMode === 'login' ? 'Create a new user' : 'Log in with existing user'

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === 'login'? <FaLock />: <FaUserPlus/>}
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required className='background-form' />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} className='background-form'/>
      </p>
      <div className="form-actions">
        <button>{submitbtnCaption}</button>
        <Link to={authMode === 'login'? '?mode=signup' : '?mode=login'}>{togglebtnCaption}</Link>
      </div>
    </form>
  );
}

export default AuthForm;
