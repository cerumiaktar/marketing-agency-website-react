import { FaFacebook,FaInstagramSquare } from "react-icons/fa";


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
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
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