import React from 'react';
import './Search.css';

function Search(){
    return (
        <div className="search">
            <div className="search__input">
                <input type="text" name="searchInput" id="searchInput"/>
            </div>
            <div className="search__info" role="button">
                <span><img src={process.env.PUBLIC_URL + "/img/icons/search.svg"} /></span>
                <span>Search</span>
            </div>
        </div>
    )
}

export default Search;
