

const Project = ({ project }) => {
    const { img, title } = project;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="card-actions">
                        <button className="btn btn-primary w-full">{title}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;