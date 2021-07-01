import React from 'react';
import './InfoPub.css';
import Description from './DescriptionPub';
import Comentary from './ComentaryPub';

function infoPub(props) {
    console.log(props)
    return (
        <div className="infoPublication">
            <div className="info">
                <Description description={props.description} name={props.name} />
            </div>
            <Comentary />
        </div>
    )
}

export default infoPub;
