import { Form, Link } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

function AuthForm() {
  const authMode = 'login';
  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">{authMode === 'login' ? <FaLock /> : <FaUserPlus />}</div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required className="form-control" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={8} className="form-control" />
      </p>
      <div className="form-actions">
        <button type="submit">Login</button>
        <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>Switch Mode</Link>
      </div>
    </Form>
  );
}

export default AuthForm;
