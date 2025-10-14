import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData();
    // const {id} = useParams()
    // const idInt = parseInt(id)
    // const service = services.find(service =>service.id === idInt)
    // console.log(service, id)
    return (
        <div>
            {/* <img src={service.img} alt="" /> */}
        </div>
    );
};

export default ServiceDetails;