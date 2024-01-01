import Logo from '../assets/no-background.png'
import './styles-navbar.css'

export default function NavBar() {
    return (
        <section className='container-navbar'>
            <nav className="navbar container">

                <a href='#' className='navbar__logo'>
                    <img src={Logo} alt="Conn Urban Logo" title='Brand of the Conn Urban' />
                </a>

                <div className='navbar__nav'>
                    <ul className='nav__list'>
                        <li className='nav__link'>
                            <a href="#"><i style={{ marginRight: '5px' }} className="fa-solid fa-user"></i> Ingresar</a>
                        </li>
                    </ul>
                    <a href="#" className='button button-primary button-saber-mas'>¡Saber más!</a>

                    {/* Responsive Button */}
                    <button className='navbar__toggle-btn' style={{ marginLeft: '7px' }}>
                    <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                    </button>
                    <div className='navbar__mobile-menu'>
                    <ul className='nav__list'>
                        <li className='nav__link-mobile'>
                            <a href="#"><i style={{ marginRight: '5px' }} className="fa-solid fa-user"></i> Ingresar</a>
                        </li>
                    </ul>
                    </div>
                    {/* Responsive Button */}

                </div>

            </nav>
        </section>
    )
}