import React, { useRef } from 'react'
import './sass/histories/Histories.scss'
import UserHistory from './histories/UserHistory';

function Histories(){
    const scrollRef = useRef();
    console.log(scrollRef)
    const handleScroll = (scrollValue) => {
        scrollRef.current.scrollLeft += scrollValue;
    };

    return (
        <div className="histories">
            <button className="scroll" id="scrollLeft" onClick={() => handleScroll(-350)}>
                <img src={process.env.PUBLIC_URL + "img/icons/arrowLeft.svg"} alt="" />
            </button>
            <button className="scroll" id="scrollRight" onClick={() => handleScroll(350)}>
                <img src={process.env.PUBLIC_URL + "img/icons/arrowRight.svg"} alt="" />
            </button>
            <div className="histories__users" id="histories__users" ref={scrollRef}>
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
