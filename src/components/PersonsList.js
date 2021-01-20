import React from 'react';

const PersonsList = (props) => {
    const persons =
        props.showAll ?
            props.persons :
            props.persons.filter(person => person.name.toUpperCase().includes(props.search.toUpperCase()));

    return (
        <table>
            <thead><tr><th></th></tr></thead>
            <tbody>
                { persons.map(person => <tr key={person.name}>
                                            <td key={person.name}>{person.name}</td>
                                            <td key={person.phone}>{person.phone}</td>
                                            <td>
                                                <button onClick={props.removePerson(person.id, person.name)}>
                                                    Poista
                                                </button>
                                            </td>
                                        </tr>) }
            </tbody>
        </table>
    )
};

export default PersonsList