import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-linear-to-bl from-[#C049A7] to-[#6C3CE9] md:h-[500px]">
                <div className="hero-content flex flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co.com/zhshxJQf/Rectangle-2.png"
                        className="md:max-w-sm rounded-lg shadow-2xl border-4 border-white"
                    />
                    <div>
                        <h1 className="text-4xl text-[#F5F5F5] font-bold">Grow Your Business with Our Expertise</h1>
                        <p className="py-6 md:w-7/12 leading-7 text-[#F5F5F5]">
                            Unlock your business's full potential with our expert guidance and innovative strategies
                            tailored solutions that drive growth, and set you apart from the competition.
                        </p>
                        <Link to='/contact'><button className="btn bg-white dark:text-black dark:border-none animate-bounce">Contact Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;