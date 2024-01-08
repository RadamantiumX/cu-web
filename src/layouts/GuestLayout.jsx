import { Outlet } from "react-router-dom";
import NavBar from "../components/layoutComps/NavBar";
import Footer from "../components/layoutComps/Footer"; 

export default function GuestLayout() {
  

    return(
       <>
        <NavBar/>
          <Outlet/>
         <Footer/>
       </>            
    )
}