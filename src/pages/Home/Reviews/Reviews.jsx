import { useEffect, useState } from "react";
import Review from "./Review";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="container mx-auto mb-20">
            <h1 class="text-2xl font-medium text-center mb-8 dark:text-black">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                   reviews.map((review) =><Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;