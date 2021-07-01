import React, { useRef } from 'react'
import './Histories.css'
import UserHistory from './histories/UserHistory';

function Histories(){
    const histories__user = document.getElementById("histories__users");
    const ref = useRef(null);

    const scroll = (scrollValue) => {
        histories__user.scrollLeft += scrollValue;
    };

    return (
        <div className="histories">
            <button className="scroll" id="scrollLeft" onClick={() => scroll(-350)}>
                <img src={process.env.PUBLIC_URL + "img/icons/arrowLeft.svg"} alt="" />
            </button>
            <button className="scroll" id="scrollRight" onClick={() => scroll(350)}>
                <img src={process.env.PUBLIC_URL + "img/icons/arrowRight.svg"} alt="" />
            </button>
            <div className="histories__users" id="histories__users">
                <UserHistory img="IMG_id2.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id3.jpg" name="JSmith" />
                <UserHistory img="IMG_id4.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id5.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id6.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id7.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id8.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id1.png" name="agus_castellaro" />
                <UserHistory img="IMG_id4.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id7.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id3.jpg" name="agus_castellaro" />
                <UserHistory img="IMG_id5.jpg" name="agus_castellaro" />
            </div>
        </div>
    )
}

export default Histories
