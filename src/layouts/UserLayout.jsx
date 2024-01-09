import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"
import NavBar from "../components/layoutComps/guest/NavBar"
import Footer from "../components/layoutComps/guest/Footer"

export default function UserLayout() {
    const token = useSelector(selectCurrentToken)
   
    
    return(
     token
        ? <><NavBar/><Outlet/><Footer/></>
        : <Navigate to="/auth/signin"/>
    )
}