import './auth.css'
import { Link } from 'react-router-dom'

export default function SignUpForm() {
    return(
        <form className="form__box">
                <div className="auth__elements">
                  <div className='title__box__form'>
                     <h1>Registrarse</h1>  
                  </div>  
                    <label htmlFor="email">Nombre de usuario</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="email"/>
                    <label htmlFor="email">Email</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name="email"/>
                    <label htmlFor="password">Contraseña</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password"/>
                    <label htmlFor="password">Repetir contraseña</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password"/>       
                    <button className="tracking-wide btn-form-auth hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"><i style={{ marginRight: '5px' }} className="fa-solid fa-user-plus"></i>Crear Cuenta</button>
                    <div>
                        <p>¿Ya tiénes una cuenta?  <Link to="/auth/signin">Inícia sesión 😎</Link></p>
                    </div>
                </div>
             </form>
    )
}