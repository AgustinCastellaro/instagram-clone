import React from 'react';
import '../sass/publications/publication/description/Description.scss';

function descriptionPub(props){
    console.log(props)
    return (
        <div className="description">
            <div className="description__actions">
                <button className="description__actions__action">
                    <img src={process.env.PUBLIC_URL + "/img/icons/activity.svg"} alt="" />
                </button>
                <button className="description__actions__action">
                    <img src={process.env.PUBLIC_URL + "/img/icons/comentary.svg"} alt="" />
                </button>
                <button className="description__actions__action">
                    <img src={process.env.PUBLIC_URL + "/img/icons/share.svg"} alt="" />
                </button>
                <button className="description__actions__action save">
                    <img src={process.env.PUBLIC_URL + "/img/icons/save.svg"} alt="" />
                </button>
            </div>
            <div className="description__message">
                <span className="name">{props.name} </span>
                <span className="message">{props.description}</span>
            </div>
        </div>
    )
}

export default descriptionPub;
