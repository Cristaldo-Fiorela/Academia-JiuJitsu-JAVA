import JiuJitsu from '../images/jiu-jitsu-5641080-1920.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';


function Banner() {
    return (
        <>
            <section className="w-auto flex flex-wrap justify-center    text-slate-200" id="banner">
                <img src={ JiuJitsu } alt="hombre de espaldas con kimono" />
                <section className='flex flex-col justify-center'>
                    <h2 className='text-6xl font-bold'>
                        Felino&nbsp;
                        <FontAwesomeIcon icon={faShieldCat} className='text-emerald-400' />
                        &nbsp;Warriors
                    </h2>
                    <h3 className='text-2xl py-10'>Accede a nuestro contenido privado para alumnos y profesores.</h3>
                    <div className='flex justify-start gap-10     text-zinc-950 font-bold'>
                        <button className="bg-emerald-400 py-3 px-5 rounded-lg hover:bg-green-400 active:translate-y-1">Inicia Sesión</button>
                        <button className="bg-emerald-400 py-3 px-5 rounded-lg hover:bg-green-400 active:translate-y-1">Registrate</button>                    </div>
                </section>

            </section>
        </>
    )
    }

export default Banner