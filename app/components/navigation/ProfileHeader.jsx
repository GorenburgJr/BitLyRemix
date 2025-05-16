import { NavLink } from '@remix-run/react';

import Logo from '../util/Logo';

function ProfileHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/modes/single">
              Play
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/stats">My Stats</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <button className="cta">Logout</button>
      </nav>
    </header>
  );
}

export default ProfileHeader;