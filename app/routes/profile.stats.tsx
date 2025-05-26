import { prisma } from '~/data/database.server'
import StatsStyles from '../styles/stats.css'
import { json, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { requireUserSession } from '~/data/auth.server'
import UniversalStatsComponent from '~/components/url/stats/ChartUniversalComponent'
import TimeStatsComponent from '~/components/url/stats/ChartTimeComponent'
import { mainStatistic } from '~/data/statistic.sort'

export default function ProfileStatsPage() {
    const loadedData = (useLoaderData<typeof loader>())
    const url = loadedData[0]
    const [expanded, setExpanded] = useState(false)
    const data = loadedData[1]
    console.log(data)
    return(<>
        <main className='box'>
            <div className='main-info'>
                <section className='square'>
                    <h1>Short Url - {url.shortUrl}</h1>
                    <button className={`collapsible-line ${expanded ? "expanded" : ""}`}
        onClick={() => setExpanded(!expanded)}>Original Url - {url.fromUrl}</button>
                    <p>{Date(url.date).slice(0, 15)}</p>
                    <p>Days left</p>
                </section>
                <section className='square'>
                    {/* <TimeStatsComponent data={data}/> */}
                </section>
                <section className='rect'>
                    {/* <TimeStatsComponent data={data}/> */}
                    <UniversalStatsComponent data={data.browserStats} />
                </section>
            </div>
        </main>
    </>)
}

export async function loader({ request }: {request: Request}) {
    const userId = await requireUserSession(request);
    const url = await prisma.url.findFirst({where: {userId: userId}})
    const urlStatistic = await mainStatistic(3)
    return json([url, urlStatistic])
}

export function links() {
    return({rel: 'stylesheet', href: StatsStyles})
}