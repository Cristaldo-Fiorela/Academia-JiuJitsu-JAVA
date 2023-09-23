import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className='bg-emerald-400'>
                <section className='py-10 flex flex-col justify-around items-center h-96 w-full'>
                    <h2 className='text-2xl lg:text-4xl font-bold text-center mx-3'>Unete a nuestra comunidad!</h2>
                    <form className='bg-slate-200 h-60 w-72 sm:w-96 md:w-8/12 lg:w-6/12 xl:w-5/12 md:py-5 mt-5 rounded-lg flex flex-wrap justify-center items-center'>
                        <div className='flex w-full justify-evenly'>
                            <label htmlFor="nombre" className='font-bold'>Nombre:</label>
                            <input type="text" id="nombre" className='rounded-md sm:w-7/12'/>
                        </div>
                        <div className='flex w-full justify-evenly'>
                            <label htmlFor="email" className='font-bold'>Correo:</label>
                            <input type="email" id="email" className='rounded-md sm:w-7/12'/>
                        </div>
                        <div className='flex w-full justify-evenly'>
                            <label htmlFor="telefono" className='font-bold'>Telefono:</label>
                            <input type="tel" id="telefono" className='rounded-md sm:w-7/12'/>
                        </div>
                        <button className="bg-emerald-400 w-full mx-10 h-10 font-semibold rounded-lg hover:bg-green-400 active:translate-y-1">Enviar</button>
                    </form>
                </section>
                <section className='bg-zinc-800 h-30 flex justify-evenly sm:justify-between sm:px-9 items-center py-2'>
                    <FontAwesomeIcon icon={faShieldCat} className='text-emerald-400 h-8' />
                    <h3 className='font-semibold text-slate-200'>Hecho por Cristaldo Fiorela</h3>
                </section>
            </footer>
        </>
    )
    }

export default Footer