import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { id, img, title, short_description } = service;
    return (
        <div className='flex grow'>
            <div className="card bg-base-100 dark:bg-white border hover:-translate-y-4 border-[#6C3CE980] shadow-2xl py-4">
                <figure>
                    <img
                        src={img}
                        alt="Services" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto dark:text-black">{title}</h2>
                    <p className="md:w-8/12 mx-auto text-[#403D3D]">{short_description}</p>
                    <Link to={`/service/:${id}`}>
                        <div className="card-actions w-full">
                            <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] text-white w-full dark:border-none">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;       