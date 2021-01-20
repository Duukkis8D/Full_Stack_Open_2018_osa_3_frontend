import React from 'react';

const AddPerson = (props) => {
    return (
        <div id="addPersonContainer">
            <label>Nimi</label>
            <input value={props.newName} onChange={props.handleNameChange}/>
            <label>Numero</label>
            <input value={props.newPhoneNumber} onChange={props.handlePhoneNumberChange}/>
            <button type="submit">Lisää tiedot</button>
        </div>
    );
};

export default AddPerson