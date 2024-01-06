import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice' 

export default function GuestLayout() {
  const token = useSelector(selectCurrentToken)

    return(
       !token 
          ? <Outlet/>
          : <Navigate to="/home"/>      
    )
}