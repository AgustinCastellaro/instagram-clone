import React from 'react';
import './User.css';

function User(props){
    return (
        <div className="user">
            <img src={process.env.PUBLIC_URL + "/img/users/" + props.img} alt="" />
            <div className="name">
                <span>{props.name}</span>
            </div>
            <button className="follow" id="follow">Follow</button>
        </div>
    )
}

export default User
