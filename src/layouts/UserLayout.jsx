import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"
import NavBar from "../components/layoutComps/NavBar"
import Footer from "../components/layoutComps/Footer"

export default function UserLayout() {
    const token = useSelector(selectCurrentToken)
   
    
    return(
     token
        ? <><NavBar/><Outlet/><Footer/></>
        : <Navigate to="/auth/signin"/>
    )
}