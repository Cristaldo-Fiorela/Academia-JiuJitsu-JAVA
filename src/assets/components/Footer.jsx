import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className='bg-emerald-400'>
                <section className='py-10 flex flex-col justify-around items-center h-96 w-full'>
                    <h2 className='text-2xl lg:text-4xl font-bold uppercase text-center'>Unete a nuestra comunidad!</h2>
                    <form className='bg-slate-200 h-60 w-72 mt-5 rounded-lg flex flex-wrap justify-center items-center'>
                        <div className='flex w-full justify-around'>
                            <label htmlFor="nombre" className='font-bold'>Nombre:</label>
                            <input type="text" id="nombre" className='rounded-md'/>
                        </div>
                        <div className='flex w-full justify-around'>
                            <label htmlFor="email" className='font-bold'>Correo:</label>
                            <input type="email" id="email" className='rounded-md'/>
                        </div>
                        <div className='flex w-full justify-around'>
                            <label htmlFor="telefono" className='font-bold'>Telefono:</label>
                            <input type="tel" id="telefono" className='rounded-md'/>
                        </div>
                    </form>
                </section>
                <section className='bg-zinc-800 h-30 flex justify-evenly items-center py-2'>
                    <FontAwesomeIcon icon={faShieldCat} className='text-emerald-400 h-8' />
                    <h3 className='font-semibold text-slate-200'>Hecho por Cristaldo Fiorela</h3>
                </section>
            </footer>
        </>
    )
    }

export default Footer