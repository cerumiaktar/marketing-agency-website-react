import { Link } from "react-router-dom";


const Project = ({ project }) => {
    const { img, title } = project;
    return (
        <div>
            <div className="card bg-base-100 dark:bg-white shadow-2xl border border-[#C049A733] dark:border-none">
                <figure>
                    <img
                        className="w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto dark:text-black">{title}</h2>
                    <Link to='/contact'>
                        <div className="card-actions">
                            <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white w-full">Contact</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;