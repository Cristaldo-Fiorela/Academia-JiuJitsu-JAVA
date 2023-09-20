import React from 'react';
import { useState } from 'react';

// COMPONENTS
import SideBar from './SideBar';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex flex-wrap">
            <section className="relative mx-auto">
                <nav className="flex justify-between bg-gray-900 text-white w-screen">
                    <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="#">
                        <h1>
                            Felino&nbsp;
                            <FontAwesomeIcon icon={faShieldCat} />
                            &nbsp;Warriors
                        </h1>        
                    </a>

                    {/* <!-- Nav Links --> */}

                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a className="hover:text-gray-200" href="#">Inicio</a></li>
                        <li><a className="hover:text-gray-200" href="#">Sobre Nosotros</a></li>
                        <li><a className="hover:text-gray-200" href="#">Profesores</a></li>
                        <li><a className="hover:text-gray-200" href="#">Noticias</a></li>
                        <li><a className="hover:text-gray-200" href="#">Contacto</a></li>
                    </ul>

                    <div className="hidden xl:flex space-x-5 items-center">
                    {/* <!-- Sign In / Register      --> */}
                    <a className="flex items-center hover:text-gray-200" href="#">
                        <FontAwesomeIcon icon={faCircleUser} className='h-6 w-6 hover:text-gray-200'/>
                    </a>

                    </div>
                    </div>

                    {/* <!-- Responsive navbar --> */}
                    <button className="navbar-burger self-center mr-12 xl:hidden" onClick={() => setOpen(true)}>
                        <FontAwesomeIcon icon={faBars} className='h-6 w-6 hover:text-gray-200' />
                    </button>
                    {open && <SideBar open={open} setOpen={setOpen} />}
                </nav>
            </section>
        </header>
    )
    }

export default Header