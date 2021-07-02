import React from 'react';
import '../sass/publications/publication/info/Info.scss';
import Description from './DescriptionPub';
import Comentary from './ComentaryPub';

function infoPub(props) {
    console.log(props)
    return (
        <div className="infoPublication">
            <div className="infoPublication__description">
                <Description description={props.description} name={props.name} />
            </div>
            <Comentary />
        </div>
    )
}

export default infoPub;
