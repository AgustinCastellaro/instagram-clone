import React from 'react';
import './sass/histories/Histories.scss'
import UserHistory from './histories/UserHistory';
import Photos from '../photos/Photos';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function handleScroll(distance, scrollValue){    
    let scrollAmount = 0;
    let interval = setInterval(() => {
        document.getElementById("histories__users").scrollLeft += scrollValue;
        scrollAmount += Math.abs(scrollValue);
        if(scrollAmount >= distance){
            clearInterval(interval);
        }
    }, 20);
}

function Histories(){
    let photosArray = Photos(25);

    return (
        <div className="histories">
            <button className="scroll" id="scrollLeft" onClick={() => handleScroll(400, -30)}>
                <IoIosArrowBack className="scrollIcon" />
            </button>
            <button className="scroll" id="scrollRight" onClick={() => handleScroll(400, 30)}>
                <IoIosArrowForward className="scrollIcon" />
            </button>
            <div className="histories__users" id="histories__users">
                {photosArray.map((url, i) => (
                    <UserHistory key={i} img={url} name="J_Smith" />
                ))}
            </div>
        </div>
    )
}

export default Histories
