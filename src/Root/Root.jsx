import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;