import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;