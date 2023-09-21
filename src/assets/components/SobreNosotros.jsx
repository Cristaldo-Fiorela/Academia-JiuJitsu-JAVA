import BJJAcademia from '../images/bjj-8111394_1280.jpg'
import BJJUnion from '../images/hands-1846428_1280.jpg'

function SobreNosotros() {
    return (
        <>
            <section className='text-white flex flex-col items-center bg-zinc-900 py-10' id='sobreNosotros'>
                <h3 className="text-2xl lg:text-4xl font-bold uppercase">Sobre Nosotros</h3>

                <div className='flex flex-wrap justify-center gap-16 py-10'>
                    <section className='flex flex-col text-lg items-center w-72 lg:text-xl lg:w-96 justify-center gap-3'>
                        <h3 className='text-xl' >Superación a través de la <span className='text-emerald-400 font-bold'>Disciplina</span> y la <span className='text-emerald-400 font-bold'>Amistad</span>.</h3>
                        <p>En Felino Warriors, abrazamos la pasión por el Jiu-Jitsu Brasileño. Somos una comunidad de entusiastas comprometidos con el crecimiento personal a través del arte del Jiu-Jitsu.</p>
                        <p>Nacimos de la idea de crear un lugar donde todos pudieran aprender, crecer y evolucionar juntos, manteniendo siempre la filosofía de respeto, amistad y superación que nos impulsa.</p>
                    </section>

                    <img src={ BJJUnion } alt="hombres en combate de BJJ" className='w-72 rounded-lg filter drop-shadow-xl saturate-50 hover:saturate-100 transition duration-300' />
                </div>
            </section>
            {/* <div class="transform h-20 -skew-y-2 origin-bottom-left inset-0 bg-zinc-900">
            </div> */}
        </>
    )
    }

export default SobreNosotros;

//     <div class="absolute inset-0 bg-blue-500 clip-triangle"></div>
