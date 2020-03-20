import React from 'react';

const validation = (props) => {
    let validationMessage = 'Username is now longer than 5 characters. Good job!';

    if (props.userInputLength <= 5) {
        validationMessage = 'Username must be longer than 5 characters.';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;