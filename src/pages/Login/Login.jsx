import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 dark:bg-white min-h-screen">
                <div className="hero-content flex-col md:w-3xl">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold dark:text-black">Login now</h1>
                    </div>
                    <div className="card bg-base-100 w-full dark:bg-white max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label dark:text-black">Email</label>
                                <input type="email" className="input dark:bg-white dark:border dark:border-[#333333] dark:text-[#333333]" placeholder="Email" />
                                <label className="label dark:text-black">Password</label>
                                <input type="password" className="input dark:bg-white dark:border dark:border-[#333333] dark:text-[#333333]" placeholder="Password" />
                                <div><a className="link link-hover dark:text-black">Forgot password?</a></div>
                                <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white mt-4">Login</button>
                            </fieldset>
                            <p className="text-center text-[#333333]">Do not have any acoount? <Link to='/signup' className="font-bold text-[#6C3CE9]">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;