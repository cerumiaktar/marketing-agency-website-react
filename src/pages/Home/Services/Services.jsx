import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch("services.json")
        .then(res => res.json())
        .then(data =>setServices(data))
    } ,[]);
    return (
        <div className="container mx-auto mt-20 mb-20">
            <h1 class="text-2xl font-medium text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    services.map(service =><Service service ={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;