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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    experts.map((expert, idx) => <Expert key={idx} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;