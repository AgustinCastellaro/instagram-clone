import React from 'react';
import './sass/publications/publication/Publication.scss';
import HeaderPub from './publication/HeaderPub';
import ImagePub from './publication/ImagePub';
import InfoPub from './publication/InfoPub';

function Publication(props){
    return (
        <div className="publication">
            <HeaderPub imageUser={props.imageUser} name={props.name} />
            <ImagePub publication={props.publication} />
            <InfoPub description={props.description} name={props.name} />
        </div>
    )
}

export default Publication
