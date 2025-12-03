import { useEffect, useState } from "react";
import Package from "./Package";

const Packages = () => {
    const [packages, setPackages] = useState([])
    
    useEffect(() =>{
        fetch('packages.json')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    } ,[])
    return (
        <div className="bg-[#C049A740] py-20 mb-12">
            <div className="text-center">
                <h1 class="text-3xl font-bold dark:text-black mb-8">Pricing</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    packages.map((pric) =><Package pric ={pric}></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;