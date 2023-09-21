import JiuJitsu from '../images/jiu-jitsu-5641080-1920.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';


function Banner() {
    return (
        <>
            <section className="w-auto flex flex-wrap justify-center text-slate-200 py-10" id="banner">
                <img src={ JiuJitsu } alt="hombre de espaldas con kimono" />
                <section className='flex flex-col justify-center items-center '>
                    <h2 className='text-3xl pt-2 lg:text-6xl  font-bold upp'>
                        Felino&nbsp;
                        <FontAwesomeIcon icon={faShieldCat} className='text-emerald-400' />
                        &nbsp;Warriors
                    </h2>
                    <h3 className='text-center py-5 text-2xl lg:py-10 w-72'>Accede a nuestro contenido privado para alumnos y profesores.</h3>
                    <div className='flex justify-start gap-10     text-zinc-950 font-bold'>
                        <button className="bg-emerald-400 py-3 px-4 lg:py-3 lg:px-5 rounded-lg hover:bg-green-400 active:translate-y-1">Inicia Sesión</button>
                        <button className="bg-emerald-400 py-3 px-4 lg:py-3 lg:px-5 rounded-lg hover:bg-green-400 active:translate-y-1">Registrate</button>                    
                    </div>
                </section>

            </section>
        </>
    )
    }

export default Banner