import { getUserFromSession } from "~/data/auth.server";
import UrlForm from "../components/url/form/UrlForm";
import urlStyles from '../styles/url.css';
import { createUrl } from "~/data/url.server";
import { useActionData, useLoaderData } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";

export default function AppLayout() {
  const actionData = useActionData<typeof action>()
  const loaderData = useLoaderData()
  const writeDashboardText = async () => {
    try {navigator.clipboard.writeText(`https://localhost:5432/${actionData?.shortUrl}`)}
    catch (err) {
      throw new Error('Copy error')
    }
  }
  return <>
  <header>
    <MainHeader userId={loaderData} />
  </header>
  <section className="box">
    <UrlForm />
    {actionData && <div className="success"> 
        <div className="success-input">
          <p>https://localhost:5432/{actionData?.shortUrl}</p> 
          </div>
          <button className="copy-btn" onClick={writeDashboardText}>Copy</button>
      </div>
    }
  </section>
  </>
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const url = formData.get("url")?.toString();
  const userID = await getUserFromSession(request);
  
  if (!url) {
    return { error: "Не указана ссылка" };
  }

  try {
    const result = await createUrl(url, userID);
    return { shortUrl: result.shortUrl };
  } catch (err) {
    throw new Error('Ошибка в создании ссылки')
  }


}

export async function loader({request}: {request: Request}) {
    if(await getUserFromSession(request)) {
      return true}
    return false
    
}

export function links() {
  return [{ rel: 'stylesheet', href: urlStyles }];
}