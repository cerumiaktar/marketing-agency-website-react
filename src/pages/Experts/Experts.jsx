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
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay rounded-xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
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