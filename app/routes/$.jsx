// import { redirect } from "@remix-run/react";

// export function loader({params}) {
//     if(params['*'] === 'exp'){
//         return redirect('/profile')
//     }

//     throw new Response('Not found', {status:404})
// }

import UrlForm from "~/components/url/form/UrlForm";
import urlStyles from '../styles/url.css';

export default function AppLayout() {
    return <>
    <UrlForm /></>
}

export function links() {
  return [{ rel: 'stylesheet', href: urlStyles }];
}