import { useEffect, useState } from "react";
import Review from "./Review";
import Marquee from "react-fast-marquee";


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
                <div className="text-center">
                    <h1 class="text-3xl font-bold mb-8 text-white">Our Client Review</h1>
                </div>
                <Marquee>
                    <div className="flex md:flex-row">
                        {
                            reviews.map((review) => <Review review={review}></Review>)
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Reviews;