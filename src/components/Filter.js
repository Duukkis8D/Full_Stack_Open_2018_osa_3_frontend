import React from 'react';

const Filter = (props) => {
    return (
        <div id="filterContainer">
            <label htmlFor="searchField">Write search term</label><br></br>
            <input id="searchField" value={props.search} onChange={props.handleSearch}/>
        </div>
    );
};

export default Filter