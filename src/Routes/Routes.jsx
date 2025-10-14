import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

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
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => {
                    const res = await fetch('/services.json');
                    const services = await res.json();
                    const idInt = parseInt(params.id);
                    const service = services.find(s => s.id === idInt);
                    return service;
                }
            }
        ]
    },
]);

export default router;