import { useLoaderData } from "@remix-run/react";
import UrlForm from "~/components/url/form/UrlForm";
import { requireUserSession } from "~/data/auth.server";
import { loadUrl } from "~/data/url.server";
import UrlStyles from '../styles/url.css'
import UrlList from "~/components/url/UrlList";

export async function ProfileLinks() {
    const urls = useLoaderData()

    const hasUrls = urls && urls.length > 0
    
    return(<>
    <section className="box">
        <UrlForm/>
    </section>
    <section className="box">
        {hasUrls && <UrlList urls = {urls} />}
        {!hasUrls && (
            <section id="no-urls">
                <h1>Ссылки не найдены</h1>
            </section>
        )}
    </section>
    </>)
}

export async function loader({request}: {request: Request}) {
    const userId = await requireUserSession(request);
    const loadedUrls = await loadUrl(userId)

    return loadedUrls
    
}

export function links() {
    return({rel: 'stylesheet', href: UrlStyles })
}