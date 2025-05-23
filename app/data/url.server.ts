import { generatingURL } from "../components/url/urlGenerator";
import { prisma } from "./database.server";
import { redirect } from "@remix-run/react";

export async function createUrl(url:string, user: number | null, redirectUrl: string) {

    const checkedUrl = await prisma.url.findFirst({where: {fromUrl: url}})
    const shortUrl = generatingURL(6)

    if(checkedUrl) {
        throw new Response('Not found', {status:404})
    }

    if(user === null) user = 0

    await prisma.url.create({data: {
        userId: user,
        shortUrl: shortUrl,
        fromUrl: url,
        date: new Date()
    }
    })
    
    return redirect(shortUrl, redirectUrl)
}

export async function loadUrl(user: number) {
    const url = await prisma.url.findMany({where: {userId: user}})
    return url
}

export async function deleteUrl(id: number) {
    try {
        await prisma.url.delete({where: { id }})
    }
    catch (err){
        throw new Error('Failed to delete expense.')
    } 
}