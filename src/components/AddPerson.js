import React from 'react';

const AddPerson = (props) => {
    return (
        <div id="addPersonContainer">
            <label for="name">Name</label>
            <input id="name" value={props.newName} onChange={props.handleNameChange}/>
            <label for="number">Number</label>
            <input id="number" value={props.newPhoneNumber} onChange={props.handlePhoneNumberChange}/>
            <button type="submit">Add person</button>
        </div>
    );
};

export default AddPerson