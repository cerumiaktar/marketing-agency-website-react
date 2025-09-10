

const Expert = ({ expert }) => {
    const { img, title, designation } = expert;
    return (
        <div className="mb-16">
            <div className="card bg-base-100 dark:bg-white shadow-sm">
                <figure>
                    <img className="w-full"
                        src={img}
                        alt="Experts" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto dark:text-black">{title}</h2>
                    <p className="dark:text-black">{designation}</p>
                    <div className="card-actions ">
                        <button className="btn  bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white w-full">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;