import { FaRegCheckCircle } from "react-icons/fa";


const Package = ({ pric }) => {
    const { id, packageName, price, currency, duration, features } = pric;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm h-[350px]">
                <div className="card-body">
                    <div className="text-center">
                        <h2 className="text-xl font-medium">{packageName}</h2>
                        <span className="text-4xl font-bold">{price}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            features.map((feature =><span className="flex items-center gap-2"><FaRegCheckCircle />{feature}</span>))
                        }
                    </ul>
                    <div className="mt-auto">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;