import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className=" dark:bg-white">
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;