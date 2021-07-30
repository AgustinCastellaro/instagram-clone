import React from 'react';
import '../sass/options/user/User.scss';

function User(props){
    return (
        <div className="user">
            <img src={props.img} alt="" />
            <div className="user__name">
                <span>{props.name}</span>
            </div>
            <button className="follow" id="follow">Follow</button>
        </div>
    )
}

export default User
