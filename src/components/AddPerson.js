import React from 'react';

const AddPerson = (props) => {
    return (
        <div id="addPersonContainer">
            <label htmlFor="name">Name</label><br></br>
            <input id="name" value={props.newName} onChange={props.handleNameChange}/><br></br>
            <label htmlFor="number">Number</label><br></br>
            <input id="number" value={props.newPhoneNumber} onChange={props.handlePhoneNumberChange}/><br></br>
            <button type="submit">Add person</button>
        </div>
    );
};

export default AddPerson