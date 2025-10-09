import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const service = services?.find((service) =>service.id === idInt)
    console.log(service, id)
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;