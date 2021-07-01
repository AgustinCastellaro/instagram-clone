import React from 'react';
import './Options.css';
import User from './options/User';

function options() {
    return (
        <div className="options">
            <div className="profile">
                <img src={process.env.PUBLIC_URL + "/img/users/IMG_id1.png"} alt="" />
                <div className="name">
                    <span className="identificator">agus_castellaro</span>
                    <span className="userName">Agustin Castellaro</span>
                </div>
                <button className="changeProfile" id="changeProfile">Change</button>
            </div>
            <div className="suggestions">
                <div className="title">
                    <span>Suggestions for you</span>
                    <button className="viewAll" id="viewAll">View all</button>
                </div>
                <div className="users">
                    <User img="IMG_id2.jpg" name="usuario1 usuario1" /> 
                    <User img="IMG_id2.jpg" name="usuario1 usuario1" /> 
                    <User img="IMG_id2.jpg" name="usuario1 usuario1" /> 
                    <User img="IMG_id2.jpg" name="usuario1 usuario1" /> 
                </div>
            </div>
            <div className="footer">
                <span>© 2021 INSTAGRAM CLONE BY AGUSTIN CASTELLARO</span>
            </div>
        </div>
    )
}

export default options
