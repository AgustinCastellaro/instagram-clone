import React from 'react';
import './ImagePub.css';

function imagePub(props){
    return (
        <div className="imagePublication">
            <img src={process.env.PUBLIC_URL + "/img/publications/" + props.publication} alt="" />
        </div>
    )
}

export default imagePub;
