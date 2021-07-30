import React from 'react';
import '../sass/histories/userHistory/UserHistory.scss';

function UserHistory(props) {
    return (
        <div className="userHistory">
            <button>
                <div className="userHistory__image">
                    <img src={props.img} alt="" />
                </div>
                <div className="userHistory__name">
                    {props.name}
                </div>
            </button>
        </div>
    )
}
export default UserHistory;
