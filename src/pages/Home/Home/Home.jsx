import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Experts from "../Experts/Experts";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Experts></Experts>
            <Reviews></Reviews>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;