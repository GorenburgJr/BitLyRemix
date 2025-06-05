import { Link } from "@remix-run/react";

function Logo() {
  return (
    <h1 id="logo">
      <Link to="/">ShortUrl</Link>
    </h1>
  );
}

export default Logo;
