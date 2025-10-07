
const Review = ({ review}) => {
    const { profile, name, designation, description, rating } = review;
    return (
        <div>
            <div className="card card-border bg-base-100 dark:bg-white shadow-2xl border-[#6C3CE980]">
                <div className="card-body">
                    <div className="flex items-center gap-3">
                        <img className="w-12" src={profile} alt="" />
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p>{designation}</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions">
                       <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;