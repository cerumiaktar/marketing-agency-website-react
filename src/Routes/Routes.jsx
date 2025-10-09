import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path:'/',
               element:<Home></Home> 
            },
            {
                path:'/services',
                element:<AllServices></AllServices>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: async () =>{
                    const res = await fetch('/services.json')
                    return res.json()
                }
            }
        ]
    },
]);

export default router;