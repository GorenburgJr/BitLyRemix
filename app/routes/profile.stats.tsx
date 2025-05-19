import StatsStyles from '../styles/stats.css'

export default function ProfileStatsPage() {

    
    return(<>
        <main className='box'>
            <div className='main-info'>
                <section className='square'>

                </section>
                <section className='square'>

                </section>
                <section className='rect'>

                </section>
            </div>
        </main>
    </>)
}

export function loader() {
    
}

export function links() {
    return({rel: 'stylesheet', href: StatsStyles})
}