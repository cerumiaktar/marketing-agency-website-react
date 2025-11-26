import { FaArrowRight } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="container mx-auto mt-20">
            <img className="mx-auto" src="https://i.ibb.co.com/hx6gnPSw/Frame-removebg-preview.png" alt="" />
            <div className="text-center mt-12">
                <button className="btn bg-red-700 text-white">Home Page <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default ErrorPage;