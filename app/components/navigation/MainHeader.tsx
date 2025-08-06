import { Link , NavLink } from '@remix-run/react';
import Logo from '../util/Logo';

function MainHeader(userId: boolean) {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          {/* {userId && <li>
            <Link to="/profile" className="cta">
              Profile
            </Link>
          </li>}
          {!userId && <li>
            <Link to="/auth" className="cta">
              Login
            </Link>
          </li>} */}
          {userId.userId === true? <li>
            <Link to="/profile" className="cta">
              Profile
            </Link>
          </li> : <li>
            <Link to="/auth" className="cta">
              Login
            </Link>
          </li>}
        </ul>
      </nav>
    </header>
  );
}


export default MainHeader;
