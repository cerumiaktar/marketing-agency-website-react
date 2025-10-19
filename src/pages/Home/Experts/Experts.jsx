import { useEffect, useState } from "react";
import Expert from "./Expert";


const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch("experts.json")
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <h1 class="text-2xl font-medium mb-8 dark:text-black">Our Experts</h1>
                <p className="text-lg dark:text-[#333333]">See all</p>
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