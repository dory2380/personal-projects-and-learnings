import React from 'react'

const validation = (props) => {
    let validationMessage = "text long enough"

    if (props.textLength <5) {
        validationMessage = "text too short"
    }

    return(
        <div>
            <h3>{validationMessage}</h3>
        </div>
    );
}

export default validation;
