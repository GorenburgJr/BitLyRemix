import { prisma } from "./database.server"

interface UrlStats {
    id: number;
    platform: string;
    mobileDevice: boolean;
    browser: string;
    location: string;
    date: Date;
    referrer: string;
    urlId: number;}[]

export type DateMap = {
  [year: number]: {
    [month: number]: {
      [day: number]: number[];
    };
  };
};

export async function mainStatistic (url: number) {
    const stats =  await prisma.stats.findMany({where: {urlId: Number(url)}})

    const statUrl = {
        timeStats: await ConvertDateToObject(stats),
        mobileDeviceStats: await itemRelation(stats, 'mobileDevice'),
        platformStats: await itemRelation(stats, 'platform'),
        browserStats: await itemRelation(stats, 'browser'),
        locationStats: await itemRelation(stats, 'location'),
        referrerStats: await itemRelation(stats, 'referrer'),

    } 
    return statUrl
}

async function itemRelation(data: any[], itemName: string): Promise<{ name: string; value: number }[]> {
  const relation: Record<string, number> = {};

  for (let i = 0; i < data.length; i++) {
    const value = data[i][itemName];
    if (value == null) continue;

    relation[value] = (relation[value] ?? 0) + 1;
  }
  
  return Object.entries(relation).map(([name, value]) => ({ name, value }));
}


async function ConvertDateToObject(data: UrlStats[]): Promise<DateMap> {
  const date: DateMap = {};

  for (let i = 0; i < data.length; i++) {
    const d = data[i].date;

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const time = d.getTime();

    const yearMap = date[year] ??= {};
    const monthMap = yearMap[month] ??= {};
    const dayArray = monthMap[day] ??= [];

    dayArray.push(time);
  }

  return date;
}

