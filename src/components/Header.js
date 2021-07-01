import React from 'react';
import './Header.css';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <div className="header">
            <nav>
                <div className="center">
                    <a class="navbar-brand" href="#">
                        <img src={process.env.PUBLIC_URL + "/img/logo/logo.png"} alt="" />
                    </a>
                    <ul>
                        <li class="nav-item">
                            <Search />
                        </li>
                    </ul>
                    <div className="icons">
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
                        <button className="icon user">
                            <img src={process.env.PUBLIC_URL + "/img/users/IMG_id1.png"} alt="" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
