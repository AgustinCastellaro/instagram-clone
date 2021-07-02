import React from 'react';
import '../sass/publications/publication/header/Header.scss';

function headerPub(props){
    return(
        <div className="headerPublication">
            <a href="#" className="userProfile">
                <img src={process.env.PUBLIC_URL + "/img/users/" + props.imageUser} className="imageUser" alt="" />
            </a>
            <a href="#" className="userProfile">
                <p className="name">{props.name}</p>
            </a>
            <button type="button">
                <img src={process.env.PUBLIC_URL + "/img/icons/options.svg"} alt="" />
            </button>
        </div>
    )
}

export default headerPub;
