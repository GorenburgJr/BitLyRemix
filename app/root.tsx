import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import sharedStyles from '~/styles/shared.css';
import Error from './components/util/Error';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: sharedStyles,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main>
      <Outlet />
      <Error title="An error occurred">
        <p>{(error as Error)?.message || 'Something went wrong. Please try again later.'}</p>
      </Error>
      <div className='error'>
        <p>
        Back to <Link to="/">safety</Link>.
      </p>
      </div>
      
    </main>
  );
}

