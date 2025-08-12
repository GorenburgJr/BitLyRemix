// app/components/AuthForm.jsx
import { useSearchParams, Link, useActionData, useNavigation } from '@remix-run/react';
import { FaLock, FaUserPlus} from 'react-icons/fa';


export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get('mode') || 'login';

  const submitCaption = authMode === 'login' ? 'Login' : 'Create account';
  const toggleCaption = authMode === 'login' ? 'Create a new user' : 'Log in with existing user';

  const nav = useNavigation();
  const isSubmitting = nav.state === 'submitting';

  const actionData = useActionData(); 

  return (
    <form method="post" id="auth-form" noValidate>
      <div className="icon-img" aria-hidden>
        {authMode === 'login' ? <FaLock /> : <FaUserPlus />}
      </div>

      {actionData?.formError && (
        <div className="form-alert" role="alert">{actionData.formError}</div>
      )}

      <div className="fields">
        <div className={`field floating ${actionData?.fieldErrors?.email ? 'has-error' : ''}`}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            required
            autoComplete="email"
            className="background-form"
            aria-invalid={!!actionData?.fieldErrors?.email}
            aria-describedby={actionData?.fieldErrors?.email ? 'email-error' : undefined}
          />
          <label htmlFor="email">Email</label>
          {actionData?.fieldErrors?.email && (
            <small id="email-error" className="error-text">{actionData.fieldErrors.email}</small>
          )}
        </div>

        <div className={`field floating with-toggle ${actionData?.fieldErrors?.password ? 'has-error' : ''}`}>
          <input
            id="password"
            name="password"
            minLength={7}
            placeholder=" "
            autoComplete={authMode === 'login' ? 'current-password' : 'new-password'}
            className="background-form"
            aria-invalid={!!actionData?.fieldErrors?.password}
            aria-describedby={actionData?.fieldErrors?.password ? 'password-error' : undefined}
          />
          <label htmlFor="password">Password</label>
          {actionData?.fieldErrors?.password && (
            <small id="password-error" className="error-text">{actionData.fieldErrors.password}</small>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? 'Please wait…' : submitCaption}
        </button>
        <Link className="muted-link" to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>
          {toggleCaption}
        </Link>
      </div>
    </form>
  );
}
