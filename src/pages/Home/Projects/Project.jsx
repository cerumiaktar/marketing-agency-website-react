

const Project = ({ project }) => {
    const { img, title } = project;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl border">
                <figure>
                    <img 
                        className="w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <div className="card-actions">
                        <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white w-full">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;