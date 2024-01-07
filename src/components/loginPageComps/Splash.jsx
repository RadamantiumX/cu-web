import './login.css'
import Logo from '../../assets/no-background.png'

export default function Splash() {
    return(
        <section id="image-section-login" className="image-section-login">
           <div className='logo-box-splash-screen'>
             <img className='logo-splash-screen' src={Logo} alt="" />
           </div>
        </section>
    )
}