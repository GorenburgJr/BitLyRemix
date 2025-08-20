import { generatingURL } from "../components/util/urlGenerator";
import { prisma } from "./database.server";

export type UrlStats = {
    url: number,
    platform?: string,
    mobileDevice: boolean,
    browser?: string,
    location: string,
    date: Date,
    referrer: string
}


export async function createUrl(url: string, user: number ): Promise<{ shortUrl: string }> {
  const checkedUrl = await prisma.url.findFirst({ where: { fromUrl: url, userId: user} });
  let shortUrl: string;

  do {
    shortUrl = generatingURL(6);
  } while (await prisma.url.findFirst({ where: { shortUrl: shortUrl } }))
  
  if (checkedUrl && user !== 0) {
    throw new Response("Уже существует", { status: 409 });
  }

  await prisma.url.create({
    data: {
      userId: user,
      shortUrl,
      fromUrl: url,
      date: new Date(),
      clicks: 0
    },
  });
  
  return { shortUrl };
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

export async function saveUrlStat(stats: UrlStats) {

    const { platform, mobileDevice, browser, location, date, referrer, url} = stats
    await prisma.stats.create({data: {platform, mobileDevice, browser, location, date, referrer, urlId: Number(url)}})
}
