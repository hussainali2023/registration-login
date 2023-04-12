import { createBrowserRouter } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";




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

])

export default router;