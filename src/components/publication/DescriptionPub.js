import React from 'react';
import './DescriptionPub.css';

function descriptionPub(props){
    console.log(props)
    return (
        <div className="description__infoPublication">
            <div className="description__infoPublication__actions">
                <button className="action">
                    <img src={process.env.PUBLIC_URL + "/img/icons/activity.svg"} alt="" />
                </button>
                <button className="action">
                    <img src={process.env.PUBLIC_URL + "/img/icons/comentary.svg"} alt="" />
                </button>
                <button className="action">
                    <img src={process.env.PUBLIC_URL + "/img/icons/share.svg"} alt="" />
                </button>
                <button className="action save">
                    <img src={process.env.PUBLIC_URL + "/img/icons/save.svg"} alt="" />
                </button>
            </div>
            <div className="description__infoPublication__message">
                <span className="name">{props.name} </span>
                <span className="message">{props.description}</span>
            </div>
        </div>
    )
}

export default descriptionPub;
