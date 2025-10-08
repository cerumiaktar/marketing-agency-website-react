import React, { useEffect, useState } from 'react';
import AllService from './AllService';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setAllServices(data))
    } ,[])
    return (
        <div className='container mx-auto mt-12'>
            <h1 class="text-2xl font-medium text-center mb-8 dark:text-black">All Services</h1>
            <div>
                {
                    allServices.map((allService) =><AllService allService={allService}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;