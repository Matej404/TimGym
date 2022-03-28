import "./sidebar.css";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Logo from "./gym-logo.png";
import { NavLink } from "react-router-dom";
import { Slide } from "react-reveal";

export default function Sidebar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return(
        <div>
            <div className="menu" onClick={handleToggleMenu}>
                <FaBars className="bars" />
                <p>MENU</p>
            </div>
            {toggleMenu && (
            <Slide left>
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-img">
                        <img src={Logo} />
                    </div>
                    <h1>LB44 FITNESS</h1>
                    <div className="close-btn" onClick={handleToggleMenu}>
                        <MdClose />
                    </div>
                </div>
                <div className="sidebar-body">
                    <ul className="nav-menu">
                        <li className="nav-link" onClick={handleToggleMenu} >
                            <NavLink to="/home" className="navlink">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-link" onClick={handleToggleMenu} >
                            <NavLink to="/about" className="navlink">
                                About 
                            </NavLink>
                        </li>
                        <li className="nav-link" onClick={handleToggleMenu}>
                            <NavLink to="/features" className="navlink" >
                                Features
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            Meet your trainer
                        </li>
                        <li className="nav-link">
                            Offer
                        </li> 
                        <li className="nav-link" onClick={handleToggleMenu}>
                            <NavLink to="./contact" className="navlink">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </Slide>)}
        </div>
    )
}