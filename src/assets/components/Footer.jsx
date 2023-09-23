import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer>
                <section>
                    <h2>Unete a nuestra comunidad!</h2>
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