import './layout.css'
import Logo from '../../assets/no-background.png'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <section id="top-banner" className="top-banner">
           <Link className='a' to="/home"><img src={Logo} alt="" /></Link>       
        </section>
    )
}