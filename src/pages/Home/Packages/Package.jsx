import { FaRegCheckCircle } from "react-icons/fa";


const Package = ({ pric }) => {
    const { id, packageName, price, currency, duration, features } = pric;
    return (
        <div className="flex grow">
            <div className="card bg-base-100 w-full shadow-sm ">
                <div className="card-body">
                    <div className="text-center">
                        <h2 className="text-xl font-medium">{packageName}</h2>
                        <span className="text-4xl font-bold">{price}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            features.map((feature =><span className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" />{feature}</span>))
                        }
                    </ul>
                    <div className="mt-auto">
                        <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] btn-block text-white">Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;