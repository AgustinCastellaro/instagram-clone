import React from 'react';
import './sass/publications/Publications.scss';
import Publication from './Publication';

function Publications() {
    return (
        <div className="publications">
            <Publication publication={"publication1.jpg"} imageUser={"IMG_id1.png"} name="Agustin Castellaro" description={"Modern house in the forest :)"} />
            <Publication publication={"publication2.jpg"} imageUser={"IMG_id2.jpg"} name="John Smith" description={"Good morning with a Nice coffee ☕❤️"} />
            <Publication publication={"publication3.jpg"} imageUser={"IMG_id3.jpg"} name="Alex Schwartz" description={"Forest in Alberta, Canada"} />
            <Publication publication={"publication4.jpg"} imageUser={"IMG_id5.jpg"} name="Alex Schwartz" description={"Manhattan bridge 😎🏙️"} />
        </div>
    )
}

export default Publications
