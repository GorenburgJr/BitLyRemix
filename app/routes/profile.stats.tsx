import { prisma } from '~/data/database.server'
import StatsStyles from '../styles/stats.css'
import { json, useLoaderData } from '@remix-run/react'
import { requireUserSession } from '~/data/auth.server'
import { mainStatistic } from '~/data/statistic.sort'
import RectTabs from '~/components/url/stats/rectTabs'
import { ChartButton } from 'types'

export default function ProfileStatsPage() {
    const loadedData = (useLoaderData<typeof loader>())
    const buttons: ChartButton[] = [
        {name: 'Devices', disabled: false}, 
        {name: 'Platforms', disabled: false}, 
        {name: 'Browser', disabled: false}
    ]
    return(<>
        <main className='box'>
            <div className='main-info'>
                <section className='square'>

                </section>
                <section className='square'>
                    <div></div>
                    <RectTabs data= {buttons}/>
                </section>
                <section className='rect'>
                    <div className='rect-chart'>
                    </div>
                </section>
            </div>
        </main>
    </>)
}

export async function loader({ request }: {request: Request}) {
    const searchParams = new URL(request.url).searchParams
    const chartMode = searchParams.get('mode') || 'devices'
    switch (chartMode) {
        case 'devices':
            break;
        case 'platform':
            break;
        case 'browser':
            break;
    }
    const userId = await requireUserSession(request);
    const url = await prisma.url.findFirst({where: {userId: userId}})
    const urlStatistic = await mainStatistic(3)
    return json([url, urlStatistic])
}

export async function action({ request }: {request: Request}) {
    const searchParams = new URL(request.url).searchParams
    const chartMode = searchParams.get('mode') || 'devices'
    
}

export function links() {
    return({rel: 'stylesheet', href: StatsStyles})
}

