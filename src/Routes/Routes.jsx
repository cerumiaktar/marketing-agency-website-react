import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices";

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
            }
        ]
    },
]);

export default router;