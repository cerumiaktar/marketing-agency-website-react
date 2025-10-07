import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;