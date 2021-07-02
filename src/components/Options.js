import React from 'react';
import './sass/options/Options.scss';
import User from './options/User';

function options() {
    return (
        <div className="options">
            <div className="options__profile">
                <img src={process.env.PUBLIC_URL + "/img/users/IMG_id1.png"} alt="" />
                <div className="options__profile__name">
                    <span className="identificator">agus_castellaro</span>
                    <span className="userName">Agustin Castellaro</span>
                </div>
                <button className="changeProfile" id="changeProfile">Change</button>
            </div>
            <div className="options__suggestions">
                <div className="options__suggestions__title">
                    <span>Suggestions for you</span>
                    <button className="viewAll" id="viewAll">View all</button>
                </div>
                <div className="options__suggestions__users">
                    <User img="IMG_id2.jpg" name="agus_castellaro" />
                    <User img="IMG_id3.jpg" name="JSmith" /> 
                    <User img="IMG_id4.jpg" name="juicy.orange40" /> 
                    <User img="IMG_id5.jpg" name="AxSchwartz99" /> 
                </div>
            </div>
            <div className="options__footer">
                <span>© 2021 INSTAGRAM CLONE BY AGUSTIN CASTELLARO</span>
            </div>
        </div>
    )
}

export default options
