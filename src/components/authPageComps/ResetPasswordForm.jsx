import { Link } from "react-router-dom"
import './auth.css'

export default function ResetPasswordForm() {
    return(
        <form className="form__box">
        <div className="auth__elements">
          <div className='title__box__form'>
             <h1>Recuperar contraseña</h1>  
          </div>  
         
            <label htmlFor="password">Contraseña</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password"/>
            
            <label htmlFor="password">Repetir la contraseña</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="retype-password" name="password"/>
                    
            <button className="tracking-wide btn-form-auth hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"><i style={{ marginRight: '5px' }} className="fa-solid fa-right-to-bracket"></i>Actualizar contraseña</button>

            <div>
                <p>¿No tienes una cuenta aún?  <Link to="/auth/signup">Registrate 😉</Link></p>
            </div>
        </div>
     </form>
    )
} 