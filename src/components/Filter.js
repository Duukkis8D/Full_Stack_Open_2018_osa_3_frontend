import React from 'react';

const Filter = (props) => {
    return (
        <div id="filterContainer">
            <label>Rajaa näytettäviä</label>
            <input value={props.search} onChange={props.handleSearch}/>
        </div>
    );
};

export default Filter