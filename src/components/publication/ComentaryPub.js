import React from 'react';
import '../sass/publications/publication/description/comentary/Comentary.scss';

function comentaryPub() {
    return (
        <div className="comentary">
            <button>
                <img src={process.env.PUBLIC_URL + "/img/icons/emoji.svg"} alt="" />
            </button>
            <textarea name="commentary" id="commentary__textarea" cols="30" rows="10" placeholder="Add a comment..." autoComplete="off" autoCorrect="off"></textarea>
            <button className="public">Public</button>
        </div>
    )
}

export default comentaryPub;
