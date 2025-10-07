import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className=" dark:bg-white">
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;