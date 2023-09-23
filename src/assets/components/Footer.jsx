import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className='bg-emerald-400'>
                <section className='py-10 flex flex-col justify-around items-center h-96'>
                    <h2 className='text-2xl lg:text-4xl font-bold uppercase'>Unete a nuestra comunidad!</h2>
                    <form>
                        <div>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre"/>
                        </div>
                        <div>
                            <label htmlFor="email">Correo:</label>
                            <input type="email" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono:</label>
                            <input type="tel" id="telefono"/>
                        </div>
                    </form>
                </section>
                <section>
                    <FontAwesomeIcon icon={faShieldCat} />
                    <h2> Hecho por Cristaldo Fiorela</h2>
                </section>
            </footer>
        </>
    )
    }

export default Footer