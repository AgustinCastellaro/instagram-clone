import React, { useState } from 'react';
import './sass/header/Header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoIosCog } from "react-icons/io";
import { CgSync } from "react-icons/cg"
import { VscBookmark } from "react-icons/vsc"

function Header(){
    const [subMenu, setSubMenu] = useState(true);

    const handleClick = () => {
        setSubMenu(!subMenu);
    }
    
    return (
        <div className="header">
            <nav>
                <div className="nav__center">
                    <a class="navbar-brand" href="#">
                        <img src={process.env.PUBLIC_URL + "/img/logo/logo.png"} alt="" />
                    </a>
                    <ul>
                        <li class="nav-item">
                            <Search />
                        </li>
                    </ul>
                    <div className="header__nav__icons">
                        <button className="icon">
                            <img src={process.env.PUBLIC_URL + "/img/icons/home.svg"} alt="" />
                        </button>
                        <button className="icon">
                            <img src={process.env.PUBLIC_URL + "/img/icons/messenger.svg"} alt="" />
                        </button>
                        <button className="icon">
                            <img src={process.env.PUBLIC_URL + "/img/icons/explore.svg"} alt="" />
                        </button>
                        <button className="icon">
                            <img src={process.env.PUBLIC_URL + "/img/icons/activity.svg"} alt="" />
                        </button>
                        <button className="icon user" onClick={() => handleClick()}>
                            <img src={process.env.PUBLIC_URL + "/img/users/IMG_id1.png"} alt="" />
                            <div className="subMenu__iconProfile" hidden={subMenu}>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <HiOutlineUserCircle className="subMenu_icon" />
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <VscBookmark className="subMenu_icon" />
                                            Saved
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <IoIosCog className="subMenu_icon" />
                                            Configuration
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <CgSync className="subMenu_icon" />
                                            Change Profile
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
