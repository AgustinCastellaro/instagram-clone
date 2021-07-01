import React from 'react';
import './HeaderPub.css';

function headerPub(props){
    return(
        <div className="headerPublication">
            <img src={process.env.PUBLIC_URL + "/img/users/" + props.imageUser} className="imageUser" alt="" />
            <p className="name">{props.name}</p>
            <button type="button" className="optionsPub">
                <img src={process.env.PUBLIC_URL + "/img/icons/options.svg"} alt="" />
            </button>
        </div>
    )
}

export default headerPub;
