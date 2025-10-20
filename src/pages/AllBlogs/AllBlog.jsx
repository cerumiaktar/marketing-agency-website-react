import { Link } from "react-router-dom";


const AllBlog = ({ allBlog }) => {
    const { id, img, title, description } = allBlog;
    return (
        <div>
            <div className="flex grow">
                <div className="card bg-base-100 dark:bg-white shadow-sm">
                    <figure>
                        <img
                            className="w-full"
                            src={img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title dark:text-black">{title}</h2>
                        <p className="dark:text-[#333333]">{description}</p>
                        <div className="w-full">
                            <Link><button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white w-full">Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;