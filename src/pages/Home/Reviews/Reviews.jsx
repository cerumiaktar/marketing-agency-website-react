import { useEffect, useState } from "react";
import Review from "./Review";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="bg-[#C049A799] mb-20">
            <div className="container mx-auto py-20">
                <div className="flex items-center justify-between">
                    <h1 class="text-2xl font-medium mb-8 dark:text-black">Our Client Review</h1>
                    <p className="text-lg dark:text-[#333333]">See all</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        reviews.map((review) => <Review review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;