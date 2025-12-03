import React, { useEffect, useState } from 'react';
import AllService from './AllService';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div className='container mx-auto mt-12 mb-6'>
            <div
                className="hero h-[200px] mb-12 rounded-xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/5hmn8KLq/Rectangle-4.png)",
                }}
            >
                <div className="hero-overlay rounded-xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Services</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    allServices.map((allService) => <AllService allService={allService}></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;