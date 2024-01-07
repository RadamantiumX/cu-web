import './login.css'

export default function FormLogin() {
    return(
        
        <section id="login-form-section" className="login-form-section">
            
             <form className="form__box">
                <div className="login__elements">
                  <div className='title__box__form'>
                     <h1>Ingresar con una cuenta</h1>  
                  </div>  
                 
                    <label htmlFor="email">Email</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="email"/>
                    <label htmlFor="password">Password</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password"/>
                    <div className='remember__box'>
                        <label htmlFor="remember">Recordarme</label>
                        <input type="checkbox" name="remember" placeholder="Recordarme"/>
                    </div>        
                    <button className="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><i style={{ marginRight: '5px' }} className="fa-solid fa-right-to-bracket"></i>Ingresar</button>
                </div>
             </form>
             
        </section>
        
      
    )
}