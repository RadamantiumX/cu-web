import './styles-layout.css'

export default function Footer() {
    return(
       <footer className='footer'>
         <h2 className='footer-title'>Conn - Urban</h2>
          <nav className='footer-nav'>
            <a href="#">Quienes Somos</a>
            <a href="#">Preguntas frecuentes</a>
          </nav>
          <h3 className='footer-end-title'>© Copyright 2024 - <a href="#">Epsiweb</a></h3>
          <nav className='social-nav'>
            <a href=""><i className="fa-brands fa-facebook fa-xl"></i></a>
            <a href=""><i className="fa-brands fa-instagram fa-xl"></i></a>
            <a href=""><i className="fa-brands fa-x-twitter fa-xl"></i></a>
          </nav>
       </footer>
    )
}