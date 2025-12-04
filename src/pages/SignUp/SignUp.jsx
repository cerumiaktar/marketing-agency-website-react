import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="hero bg-base-200 dark:bg-white min-h-screen">
                <div className="hero-content flex-col md:w-3xl">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold dark:text-black">Sign Up</h1>
                    </div>
                    <div className="card bg-base-100 w-full dark:bg-white max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label dark:text-black">Name</label>
                                <input type="text" className="input dark:bg-white dark:border dark:border-[#333333] dark:text-[#333333]" placeholder="Name" />
                                <label className="label dark:text-black">Email</label>
                                <input type="email" className="input dark:bg-white dark:border dark:border-[#333333] dark:text-[#333333]" placeholder="Email" />
                                <label className="label dark:text-black">Password</label>
                                <input type="password" className="input dark:bg-white dark:border dark:border-[#333333] dark:text-[#333333]" placeholder="Password" />
                                <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white mt-4">Sign Up</button>
                            </fieldset>
                            <p className="text-center text-[#333333]">Have any acoount? <Link to='/login' className="font-bold text-[#6C3CE9]">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;