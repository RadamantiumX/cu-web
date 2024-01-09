import { Outlet } from "react-router-dom";
import NavBar from "../components/layoutComps/guest/NavBar";
import Footer from "../components/layoutComps/guest/Footer"; 

export default function GuestLayout() {
  

    return(
       <>
        <NavBar/>
          <Outlet/>
         <Footer/>
       </>            
    )
}