import Logo from '../../../assets/no-background.png'
import '../layout.css'
import ResponsiveButton from './ResponsiveButton'


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
                            <a href="#"><i style={{ marginRight: '2px' }} className="fa-solid fa-user"></i> Mi Perfil</a>
                            
                        </li>
                        <li className='nav__link'>
                           <a href="#"><i style={{ marginRight: '2px' }} className="fa-solid fa-location-dot"></i>Mi Ubicación</a>
                        </li>
                    </ul>
                    <a href="#" className='button button-primary button-saber-mas'>¡Saber más!</a>

                    {/* Responsive Button */}
                      <ResponsiveButton/>
                    {/* Responsive Button */}

                </div>

            </nav>
        </section>
    )
}