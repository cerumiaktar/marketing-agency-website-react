import { useEffect, useState } from "react";
import Expert from "./Expert";


const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() =>{
        fetch("experts.json")
        .then(res => res.json())
        .then(data => setExperts(data))
    } ,[])
    return (
        <div className="container mx-auto mb-16">
            <h1 class="text-2xl font-medium text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    experts.map((expert, idx) =><Expert key={idx} expert = {expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;