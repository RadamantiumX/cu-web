import { createBrowserRouter, Navigate } from "react-router-dom"
import GuestLayout from "./layouts/GuestLayout"
import DefaultLayout from "./layouts/DefaultLayout"
import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Info from "./pages/Info"

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"/>
            },
            {
                path: '/home',
                element: <Home/>
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/login'/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
   

    },
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/info',
        element: <Info/>
    }

])

export default router;