

const About = () => {
    return (
        <div className="container mx-auto md:mb-20 flex flex-col md:flex-row gap-6">
            <div className="md:w-6/12 relative">
                <img className="h-[473px]" src="https://i.ibb.co.com/QFMg8wr6/Frame-12.png" alt="about" />
                <div className="absolute right-0 -bottom-10 hidden md:block">
                    <img className="w-[400px] md:h-[300px] rounded-2xl border-8 border-white" src="https://i.ibb.co.com/5hmn8KLq/Rectangle-4.png" alt="about" />
                </div>
            </div>
            <div className="md:w-6/12 space-y-4">
                <p className="font-bold text-[#6C3CE9]">About Us</p>
                <h2 className="text-2xl font-bold md:w-3/6 text-[#151515]">How We Build Great Things</h2>
                <p className=" md:w-4/6 leading-7 text-[#737373]">Our streamlined process ensures your digital success. We start with a thorough consultation to understand your goals, followed by in-depth research and strategy development,followed by in-depth research and strategy development <br /> <br />
                    Our creative team designs visually engaging solutions, which our developers then bring to life with cutting-edge technology.Partner with us to elevate your digital strategy.Partner with us to elevate your digital strategy.
                </p>
                <button className="btn bg-linear-to-bl from-[#C049A799] to-[#6C3CE999] text-white dark:border-none">Get More Info</button>
            </div>
        </div>
    );
};

export default About;