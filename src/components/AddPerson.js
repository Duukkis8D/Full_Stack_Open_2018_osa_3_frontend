import React from 'react';

const AddPerson = (props) => {
    return (
        <div id="addPersonContainer">
            <label>Name</label>
            <input value={props.newName} onChange={props.handleNameChange}/>
            <label>Number</label>
            <input value={props.newPhoneNumber} onChange={props.handlePhoneNumberChange}/>
            <button type="submit">Add person</button>
        </div>
    );
};

export default AddPerson