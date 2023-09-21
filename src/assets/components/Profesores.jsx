import ProfPablo from '../images/men-8151665_1280.jpg'
import ProfMartina from '../images/bjj-8151668_1280.jpg'
import ProfJuan from '../images/bjj-8205246_1280.jpg'

function Profesores() {
    return (
        <>
            <section className="text-white  flex flex-col items-center py-10">
                <h3 className="text-4xl font-bold text-emerald-400 uppercase">Profesores</h3>
                <div className='flex flex-wrap py-10 justify-center items-center gap-10'>
                    <section className='flex flex-col items-center gap-5'>
                        <img src={ ProfJuan } alt="retrato profesor juan" className='h-80 rounded-full shadow-lg shadow-emerald-900 hover:shadow-emerald-500'/>
                        <h4 className='text-2xl'>Juan González</h4>
                    </section>
                    <section className='flex flex-col items-center gap-5'>
                        <img src={ ProfMartina } alt="retrato profesora martina" className='h-80 rounded-full shadow-lg shadow-emerald-900 hover:shadow-emerald-500' />
                        <h4 className='text-2xl'>Martina López</h4>
                    </section>
                    <section className='flex flex-col items-center gap-5'>
                        <img src={ ProfPablo } alt="retrato profesor pablo" className='h-80 rounded-full shadow-lg shadow-emerald-900 hover:shadow-emerald-500' />
                        <h4 className='text-2xl'>Pablo Rodríguez</h4>
                    </section>
                </div>
            </section>
        </>
    )
    }

export default Profesores;