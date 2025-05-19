import { Params } from "@remix-run/react";
import { redirect } from "react-router";
import { prisma } from "~/data/database.server";

export default function UrlRedirect() {

}

export async function action({params, request}: {params: Params, request: Request}){
    const shortUrl = params.url

    const findedUrl = await prisma.url.findFirst({where: {shortUrl}})

    // if(!findedUrl){
    //     throw new Error('Not Found')
    // }

    console.log(request)

    // return redirect(findedUrl.fromUrl)
    
}

// export function loader() {
//     return
//     // throw new Response('Not found', {status:404})
// }