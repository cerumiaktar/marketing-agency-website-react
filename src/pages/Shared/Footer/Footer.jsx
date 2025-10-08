import { FaFacebook,FaInstagramSquare,FaLinkedin,FaYoutubeSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            <footer className="footer footer-horizontal footer-center bg-[#6C3CE9] text-white rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Blogs</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className="text-2xl"><FaFacebook /></a>
                        <a className="text-2xl"><FaInstagramSquare /></a>
                        <a className="text-2xl"><FaLinkedin /></a>
                        <a className="text-2xl"><FaYoutubeSquare /></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;