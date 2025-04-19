import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';
import styles from '../styles/shared.css'

function MainHeader() {
  const userId = useLoaderData();

  return (
    <header id="main-header">
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
          {(userId as string) && (
            <Form method="post" action="/logout" id="logout-form">
              <button className="cta-alt">Logout</button>
            </Form>
          )}
            {!userId && (
              <Link to="/auth" className="cta">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function links() {
  return [{rel:'stylesheet', href: styles}]
}

export default MainHeader;
