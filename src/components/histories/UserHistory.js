import React from 'react';
import './UserHistory.css';

function UserHistory(props) {
    return (
        <div className="userHistory">
            <button>
                <div className="image">
                    <img src={process.env.PUBLIC_URL + "/img/users/" + props.img} alt="" />
                </div>
                <div className="name">{props.name}</div>
            </button>
        </div>
    )
}
export default UserHistory;
