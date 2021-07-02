import React from 'react';
import '../sass/publications/publication/image/Image.scss';

function imagePub(props){
    return (
        <div className="imagePublication">
            <img src={process.env.PUBLIC_URL + "/img/publications/" + props.publication} alt="" />
        </div>
    )
}

export default imagePub;
