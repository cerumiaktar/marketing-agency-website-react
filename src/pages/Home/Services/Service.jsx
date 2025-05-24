

const Service = ({ service }) => {
    const { img, title, short_description } = service;
    return (
        <div>
            <div className="card bg-base-100 border border-[#6C3CE980] shadow-2xl py-4">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <p className="md:w-8/12 mx-auto text-[#403D3D]">{short_description}</p>
                    <div className="card-actions">
                        <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] text-white w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;