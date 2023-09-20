import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <header class="flex flex-wrap h-screen">
        <section class="relative mx-auto">
                <nav class="flex justify-between bg-gray-900 text-white w-screen">
                <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                <a class="text-3xl font-bold font-heading" href="#">
                    <h1>
                        Felino&nbsp;
                        <FontAwesomeIcon icon={faShieldCat} />
                        &nbsp;Warriors
                    </h1>        
                </a>

                {/* <!-- Nav Links --> */}

                <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    <li><a class="hover:text-gray-200" href="#">Inicio</a></li>
                    <li><a class="hover:text-gray-200" href="#">Sobre Nosotros</a></li>
                    <li><a class="hover:text-gray-200" href="#">Profesores</a></li>
                    <li><a class="hover:text-gray-200" href="#">Noticias</a></li>
                    <li><a class="hover:text-gray-200" href="#">Contacto</a></li>
                </ul>
                {/* <!-- Header Icons --> */}

                <div class="hidden xl:flex items-center space-x-5 items-center">
                {/* <!-- Sign In / Register      --> */}
                <a class="flex items-center hover:text-gray-200" href="#">
                    <FontAwesomeIcon icon={faCircleUser} className='h-6 w-6 hover:text-gray-200'/>
                </a>

                </div>
                </div>
                {/* <!-- Responsive navbar --> */}
                    <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <FontAwesomeIcon icon={faBars} className='h-6 w-6 hover:text-gray-200' />
                    </a>
                    <div className=' bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 backdrop-blur-sm'></div>

                    <div className='bg-cyan-600 min-h-screen w-80 fixed top-0 right-0'>
                        <div className='pt-3'>
                            <button className='ml-4 mb-10 text-white cursor-pointer'>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <div>
                                <ul class="px-4 mx-auto font-semibold flex-col text-2xl">
                                    <li className='py-3 mb-2'><a class="hover:text-gray-200 " href="#">Inicio</a></li>
                                    <li className='py-3 mb-2'><a class="hover:text-gray-200 py-3 mb-2" href="#">Sobre Nosotros</a></li>
                                    <li className='py-3 mb-2'><a class="hover:text-gray-200 py-3 mb-2" href="#">Profesores</a></li>
                                    <li className='py-3 mb-2'><a class="hover:text-gray-200 py-3 mb-2" href="#">Noticias</a></li>
                                    <li className='py-3 mb-2'><a class="hover:text-gray-200 py-3 mb-2" href="#">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    )
    }

export default Header