import React, { useEffect, useState } from 'react';
import Expert from './Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch("experts.json")
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className='container mx-auto mt-12'>
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
                        <h1 className="mb-5 text-5xl font-bold">All Experts</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    experts.map((expert, idx) => <Expert key={idx} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;