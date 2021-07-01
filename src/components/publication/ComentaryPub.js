import React from 'react';
import './ComentaryPub.css';

function comentaryPub() {
    return (
        <div className="comentary__infoPublication">
            <img src={process.env.PUBLIC_URL + "/img/icons/emoji.svg"} alt="" />
            <textarea name="commentary" id="commentary" cols="30" rows="10" placeholder="Add a comment..." autoComplete="off" autoCorrect="off"></textarea>
            <button className="public">Public</button>
        </div>
    )
}

export default comentaryPub;
