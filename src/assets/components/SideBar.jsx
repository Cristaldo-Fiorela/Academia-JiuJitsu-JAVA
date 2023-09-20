import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

const SideBar = (props) => {

    const {open, setOpen } = props;

    return (
        <>
        <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

        <div className={`${open ? 'w-80' : 'w-0'} bg-cyan-600 min-h-screen w-80 fixed top-0 right-0 transition-all duration-300`}>
            <div className={`${!open && 'hidden'} pt-3`}>
                <button className='ml-4 mb-10 text-white cursor-pointer' onClick={() => setOpen(false)}>
                    <FontAwesomeIcon icon={faXmark} className='h-6 w-6 hover:text-gray-200'/>
                </button>
                <div>
                    <ul className="px-4 mx-auto font-semibold flex-col text-2xl">
                        <li className='py-3 mb-2'><a className="hover:text-gray-200 " href="#">Inicio</a></li>
                        <li className='py-3 mb-2'><a className="hover:text-gray-200 py-3 mb-2" href="#">Sobre Nosotros</a></li>
                        <li className='py-3 mb-2'><a className="hover:text-gray-200 py-3 mb-2" href="#">Profesores</a></li>
                        <li className='py-3 mb-2'><a className="hover:text-gray-200 py-3 mb-2" href="#">Noticias</a></li>
                        <li className='py-3 mb-2'><a className="hover:text-gray-200 py-3 mb-2" href="#">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBar