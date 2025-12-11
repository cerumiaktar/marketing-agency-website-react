

const Contact = () => {
    return (
        <div className="container mx-auto mt-12 mb-12">
            <div
                className="hero h-[200px] mb-12 rounded-xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/5hmn8KLq/Rectangle-4.png)",
                }}
            >
                <div className="hero-overlay bg-[#C049A7C7] rounded-xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="space-y-4 w-6/12">
                    <h1 className="text-3xl font-bold dark:text-black">Contact Us</h1>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl dark:text-black">Name</legend>
                        <input type="text" className="input w-full" placeholder="Enter your name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl dark:text-black">Email</legend>
                        <input type="email" className="input w-full" placeholder="Enter your email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl dark:text-black">Message</legend>
                        <textarea className="textarea w-full" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset className="fieldset">
                        <input type="submit" className="input w-full bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] dark:border-none text-white text-xl text-center font-medium" placeholder="Message" />
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Contact;