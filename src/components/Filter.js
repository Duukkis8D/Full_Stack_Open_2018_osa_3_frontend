import React from 'react';

const Filter = (props) => {
    return (
        <div id="filterContainer">
            <label>Kirjoita hakusana</label>
            <input value={props.search} onChange={props.handleSearch}/>
        </div>
    );
};

export default Filter