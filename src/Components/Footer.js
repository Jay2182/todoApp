import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-2">
            <div className="container bg-light py-2">
                <div className="text-center">
                    <h2>TODO APP</h2>
                </div>
                <div>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <p className="copyright">Made by: Kanjia Jaykumar K.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
