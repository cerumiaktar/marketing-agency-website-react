import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container mx-auto mt-20 mb-20">
            <div className="flex items-center justify-between">
                <h1 class="text-2xl font-medium mb-8 dark:text-black">Our Services</h1>
                <p className="text-lg">See all</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;