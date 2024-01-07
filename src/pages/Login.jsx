import FormLogin from "../components/loginPageComps/FormLogin"
import Splash from "../components/loginPageComps/Splash"

export default function Login() {
    return(
        <main className="main-auth-page">
        <FormLogin/>
        <Splash/>
        </main>
        
    )
}