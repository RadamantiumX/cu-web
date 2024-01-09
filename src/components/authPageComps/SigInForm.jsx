import './auth.css'
import { Link } from 'react-router-dom'

export default function SignInForm() {
    return(
        
        
            
             <form className="form__box">
                <div className="auth__elements">
                  <div className='title__box__form'>
                     <h1>Ingresar con una cuenta</h1>  
                  </div>  
                 
                    <label htmlFor="email">Email</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="email"/>
                    <label htmlFor="password">Contraseña</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password"/>
                    <div className='remember__box'>
                        <label htmlFor="remember">Recordarme</label>
                        <input type="checkbox" name="remember" placeholder="Recordarme"/>
                        <Link to="/auth/recovery">Olvidaste tu contraseña?</Link>
                    </div>        
                    <button className="tracking-wide btn-form-auth hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"><i style={{ marginRight: '5px' }} className="fa-solid fa-right-to-bracket"></i>Ingresar</button>

                    <div>
                        <p>¿No tienes una cuenta aún?  <Link to="/auth/signup">Registrate 😉</Link></p>
                    </div>
                </div>
             </form>
             
      
    )
}