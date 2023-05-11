import { createBrowserRouter } from "react-router-dom";
import Registration from "../Registration/Registration";
import Login from "../Login/Login"
import Home from '../Home/Home'
import Forget from '../Login/Forget'




const router = createBrowserRouter([
    {
        path:'/',
        element: <Registration/>
    },
    {
        path:'/registration',
        element: <Registration/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path: '/forget',
        element: <Forget/>
    }

])

export default router;