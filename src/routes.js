import { createBrowserRouter } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";
import Forget from "./Forget";




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