import { Link } from "react-router-dom";


const Blog = ({ blog }) => {
    const { id, img, title, description } = blog;
    return (
        <div className="flex grow">
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        className="w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="w-full">
                        <Link><button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white w-full">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;