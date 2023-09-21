import JiuJitsu from '../images/jiu-jitsu-5641080-1920.png'

function Banner() {
    return (
        <>
            {/* <div className="bg-red-500 h-96 w-screen"></div> */}
            <section className="w-auto bg-black flex justify-center" id="banner">
                <img src={ JiuJitsu } alt="" className="" />
                <section className='bg-red-500'>
                    <h2>Accede a nuestro contenido privado para alumnos y profesores</h2>
                    <div>
                        <button className="bg-red-500">Inicia Sesion</button>
                        <button>Registrate</button>
                    </div>
                </section>

            </section>
        </>
    )
    }

export default Banner