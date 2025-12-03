import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Contact from "../pages/Contact/Contact";
import Experts from "../pages/Experts/Experts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                // loader: async ({ params }) => {
                //     const res = await fetch("/services.json");
                //     const services = await res.json();
                    
                //     const service = services.find((item) => item.id == params.id);
                    
                //     return service || null;

                // }
            },
            {
                path: '/blogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: '/experts',
                element: <Experts></Experts>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
]);

export default router;