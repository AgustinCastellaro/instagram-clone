import React from 'react';
import './User.css';

function User(props){
    return (
        <div className="user">
            <img src={process.env.PUBLIC_URL + "/img/users/IMG_id2.jpg"} alt="" />
            <div className="name">
                <span>agus_castellaro</span>
            </div>
            <button className="follow" id="follow">Follow</button>
        </div>
    )
}

export default User
