import React from 'react';
import './sass/options/Options.scss';
import User from './options/User';
import Photos from '../photos/Photos';

function options() {
    let photosArray = Photos(10);

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
                    {photosArray.map((url, i) => (
                        <User key={i} img={url} name="agus_castellaro" />
                    ))}
                </div>
            </div>
            <div className="options__footer">
                <span>© 2021 INSTAGRAM CLONE BY AGUSTIN CASTELLARO</span>
            </div>
        </div>
    )
}

export default options
