import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'white',
        border:'1x solid blue',
        padding:'2px',
    }
    return (
        <input className='user userinput' type="text" style={style} onChange={props.change} value={props.currentName}></input>
    );
}

export default userInput;

// <p>children: {props.children}</p>
// <h1>UserInput Component</h1>
