import UrlForm from "~/components/url/form/UrlForm";
import urlStyles from '../styles/url.css';

export default function AppLayout() {
    return <>
    <UrlForm /></>
}

export function links() {
  return [{ rel: 'stylesheet', href: urlStyles }];
}