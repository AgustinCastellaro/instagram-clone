import React from 'react';
const unsplash = "https://source.unsplash.com/200x200/";

function Photos(maxPhotos){
    let photos = [];
    for(var i = 1; i <= maxPhotos; i++){
        photos[i] = `${unsplash}?person${i}`
    };

    return (
        photos
    )
}

export default Photos;