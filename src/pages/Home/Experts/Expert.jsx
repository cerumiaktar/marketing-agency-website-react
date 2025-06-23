

const Expert = ({ expert }) => {
    const { img, title, designation } = expert;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className="w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p>{designation}</p>
                    <div className="card-actions ">
                        <button className="btn  bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] text-white w-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;