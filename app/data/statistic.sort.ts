import { prisma } from "./database.server"

interface TimeStats {
    item:  {
        date: string,
        count: number}[]
}


export async function DatesStatistic (url: int) {
    const data =  await prisma.stats.findMany({where: {urlId: Number(url)}})
    const data = data.map(({ id, date }) => ({ id, day: date.getDay(), mounth: date.getMonth()  }));
    
}
