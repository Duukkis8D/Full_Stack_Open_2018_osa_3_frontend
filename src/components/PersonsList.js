import React from 'react';

const PersonsList = (props) => {
    const persons =
        props.showAll ?
            props.persons :
            props.persons.filter(person => person.name.toUpperCase().includes(props.search.toUpperCase()));

    return (
        <div id="personsListContainer">
            <table>
                <thead></thead>
                <tbody>
                    { persons.map(person => <tr key={person.name}>
                                                <td key={person.name}>{person.name}</td>
                                                <td key={person.phone}>{person.phone}</td>
                                                <td>
                                                    <button className="removeButton"
                                                            onClick={props.removePerson(person.id, person.name)}>
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>) }
                </tbody>
            </table>
        </div>
    )
};

export default PersonsList