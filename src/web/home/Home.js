import "./home.css";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Logo from "./gym-logo.jpg";

export default function Home() {
    const [toggleMenu, setToggleMenu] = useState(true);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return(
        <div className="home">
            <div className="menu" onClick={handleToggleMenu}>
                <FaBars className="bars" />
                <p>MENU</p>
            </div>
            {toggleMenu && (
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-img">
                        <img src={Logo} />
                    </div>
                    <h1>Tim's Gym</h1>
                    <div className="close-btn" onClick={handleToggleMenu}>
                        <MdClose />
                    </div>
                </div>
                <div className="sidebar-body">
                    <ul className="nav-menu">
                        <li className="nav-link">
                            Home
                        </li>
                        <li className="nav-link">
                            About
                        </li>
                        <li className="nav-link">
                            Features
                        </li>
                        <li className="nav-link">
                            Photos
                        </li>
                        <li className="nav-link">
                            Offer
                        </li> 
                        <li className="nav-link">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>)}
            <div className="home-container">
            <h2>STEP UP YOUR</h2>
            <h1>
                <span>FITNESS </span>
                WITH US
            </h1>
            <p>Build Your Body And Fitness With Proffesional Touch</p>
        </div>
        </div>
    )
}