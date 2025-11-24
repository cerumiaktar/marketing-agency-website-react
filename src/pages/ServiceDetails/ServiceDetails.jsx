import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData();
    
    return (
        <div>
            {/* <img src={service.img} alt="" /> */}
            <h1 className="text-2xl font-medium">This is Service Details Page</h1>
        </div>
    );
};

export default ServiceDetails;