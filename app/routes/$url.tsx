import { Params } from "@remix-run/react";
import { redirect } from "react-router";
import { UAParser } from "ua-parser-js";
import { prisma } from "~/data/database.server";
import { saveUrlStat, UrlStats } from "~/data/url.server";

export default function UrlRedirect() {

}

export async function loader ({ params, request }: {request: Request, params: Params}){
    const shortUrl = params.url
    const findedUrl = await prisma.url.findFirst({where: {shortUrl}})
    if(findedUrl){
        const ua = UAParser(request.headers.get('user-agent')) 
        const stats: UrlStats = {
            url: findedUrl.id,
            platform: ua.os.name,
            mobileDevice: request.headers.get('sec-ch-ua-mobile') === '?1'? true : false ,
            browser: ua.browser.name,
            location: '',
            date: new Date(),
            referrer: ''
        }
        saveUrlStat(stats)

     return redirect(findedUrl.fromUrl)   
    }
        
    // else throw new Error("Not Found")

    // const ip =
    // request.headers.get("x-forwarded-for") || // если за прокси (напр. Vercel, Fly.io, Cloudflare)
    // request.headers.get("cf-connecting-ip") || // Cloudflare
    // request.headers.get("x-real-ip") || // Nginx
    // "не удалось определить";
    console.log(request)


    console.log(stats)
    return null
    
  
}