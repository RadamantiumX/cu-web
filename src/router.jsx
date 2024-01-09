import { createBrowserRouter, Navigate } from "react-router-dom"
import GuestLayout from "./layouts/GuestLayout"
import UserLayout from "./layouts/UserLayout"
import AuthLayout from "./layouts/AuthLayout"


import Home from "./pages/Home"
import About from "./pages/About"
import Info from "./pages/Info"
import Profile from "./pages/Profile"
import Search from "./pages/Search"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Recovery from "./pages/Recovery"
import RessetPassword from "./pages/ResetPassword"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
    {
        path: '/user',
        element: <UserLayout/>,
        children: [
            {
                path: '/user',
                element: <Navigate to="/user/profile"/>
            },
            {
                path: '/user/profile',
                element: <Profile/>
            },
            {
                path: '/user/search',
                element: <Search/>
            }
            
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/info',
                element: <Info/>
            },
            {
                path: '/about',
                element: <About/>
            }
           
        ]
   

    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth',
                element: <Navigate to="/auth/signin"/>
            },
            {
                path: '/auth/signin',
                element: <SignIn/>
            },
            {
                path: '/auth/signup',
                element: <SignUp/>
            },
            {
                path: '/auth/recovery',
                element: <Recovery/>
            },
            {
                path: '/auth/reset-password',
                element: <RessetPassword/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
    
])

export default router;