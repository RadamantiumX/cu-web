import Logo from '../assets/no-background.png'
import './styles-navbar.css'

export default function NavBar() {
    return(
        <section className='container-navbar'>
         <nav className="navbar container">

            <a href='#' className='navbar__logo'>
                <img src={Logo} alt="Conn Urban Logo" title='Brand of the Conn Urban'/>
            </a>

            <div className='navbar__nav'>
               <ul className='nav__list'>
                  <li className='nav__Link'>
                    <a href="#">Ingresar</a>
                  </li>
               </ul>
        
            </div>
            <a href="#" className='button button-primary button-saber-mas'>¡Saber más!</a>
         </nav>
        </section>
    )
}