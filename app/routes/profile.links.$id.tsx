import { Params, redirect } from "@remix-run/react";
import { deleteUrl } from "~/data/url.server";
import StatsStyles from '../styles/stats.css'

export default async function UrlItemPage() {
    return(<>
    <div className="box">

    </div>
    </>)
}

export async function action({ params, request }: {params: Params ,request: Request}) {
    const urlId = params.id

    if (request.method === 'DELETE') {
    await deleteUrl(urlId);
    redirect('/profile/links')
    return { deletedId: urlId };
  }
}

export function links() {
    return({rel: 'stylesheet', href: StatsStyles })
}