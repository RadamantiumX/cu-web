import '../components/authPageComps/auth.css'
import { Outlet } from 'react-router-dom'
import Splash from '../components/layoutComps/auth/Splash'
import Banner from '../components/layoutComps/auth/Banner'


export default function AuthLayout () {
    return(
        <>
        <Banner/>
       
        <main className='main-auth-page'>
           
            <section id="auth-form-section" className="auth-form-section">
                  
              <Outlet/>
            </section>
            <Splash/>      
        </main>
        </>
    )
}