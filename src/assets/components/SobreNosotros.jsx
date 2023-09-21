import BJJAcademia from '../images/bjj-8111394_1280.jpg'

function SobreNosotros() {
    return (
        <>
            <section className='text-white'>
                <h3 className="">Sobre Nosotros</h3>

                <div>
                    <img src={ BJJAcademia } alt="hombres en combate de BJJ" />
                    
                    <section>
                        <h3>Superación a través de la Disciplina y la Amistad</h3>
                        <p>En Felino Warriors, abrazamos la pasión por el Jiu-Jitsu Brasileño. Somos una comunidad de entusiastas comprometidos con el crecimiento personal a través del arte del Jiu-Jitsu.</p>
                        <p>Nacimos de la idea de crear un lugar donde todos pudieran aprender, crecer y evolucionar juntos, manteniendo siempre la filosofía de respeto, amistad y superación que nos impulsa.</p>
                    </section>
                </div>
            </section>
        </>
    )
    }

export default SobreNosotros;