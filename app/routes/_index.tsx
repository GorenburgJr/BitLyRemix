import UrlForm from "../components/url/form/UrlForm";
import urlStyles from '../styles/url.css';
import MainHeader from "~/components/navigation/MainHeader";

export default function AppLayout() {
    return <>
    <header>
      <MainHeader/>
    </header>
    <section className="box">
      <UrlForm />
        <div className="success"> 
          <input type="text" readOnly/>
        </div>
    </section>
    </>
}


export function links() {
  return [{ rel: 'stylesheet', href: urlStyles }];
}