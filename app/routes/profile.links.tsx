import { Outlet, useLoaderData } from "@remix-run/react";
import UrlForm from "~/components/url/form/UrlForm";
import { getUserFromSession, requireUserSession } from "~/data/auth.server";
import { createUrl, loadUrl } from "~/data/url.server";
import UrlStyles from '../styles/url.css'
import UrlList from "~/components/url/UrlList";
import { json } from '@remix-run/node';

export default function ProfileLinks() {
    const urls = useLoaderData()

    return(<>
    <Outlet/>
    <main>
    <section className="form-place">
        <UrlForm/>
    </section>
    <section>
        {urls && <UrlList urls = {urls} />}
        {!urls && (
            <section id="no-urls">
                <h1>Ссылки не найдены</h1>
            </section>
        )}
    </section>
    </main>
    
    </>)
}

export async function loader({request}: {request: Request}) {
    const userId = await requireUserSession(request);
    const loadedUrls = await loadUrl(userId)
    return json(loadedUrls)
    
}

export async function action({ request }: {request: Request}) {
    const formData = await request.formData()
    const url = Object.fromEntries(formData).url
    const userID = await getUserFromSession(request)
    
    try {
      return await createUrl(url, userID, '/profile/links')
    } catch (err) {
      return err
    }

    
}

export function links() {
    return({rel: 'stylesheet', href: UrlStyles })
}