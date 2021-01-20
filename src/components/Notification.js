import React from 'react';

const Notification = (props) => {
    if (props.message === '') return <div></div>;

    return (
        <div id="notification">{props.message}</div>
    );
};

export default Notification