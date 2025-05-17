import { Form, NavLink } from '@remix-run/react';

import Logo from '../util/Logo';

function ProfileHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/profile/links">
              My Links
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/stats">My Stats</NavLink>
          </li>
          <li>
            <NavLink to='/profile/subscribe'>My Subscribe</NavLink>
          </li>
        </ul>
      </nav>
      <Form method="post" action="logout">
          <button className="cta">Logout</button>
      </Form>
    </header>
  );
}

export default ProfileHeader;