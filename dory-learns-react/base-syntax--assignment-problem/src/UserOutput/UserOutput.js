import React from 'react'

const userOutput = (props) => {
    return (
        <div className=' user useroutput'>
            <p>Username: {props.userName}</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper tristique sapien, et maximus lorem aliquet at.
                Duis at erat ut odio sollicitudin rutrum eu at orci. Nunc consequat justo et imperdiet suscipit. Maecenas sed rhoncus ipsum,
                interdum pretium urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Donec vel libero dui.   </p>

            <p>Maecenas tincidunt ante in risus dapibus, et pretium sapien varius. Nam consectetur suscipit feugiat.
            Ut rutrum aliquam enim. Proin sit amet lobortis justo. Aenean tempor magna felis, at facilisis quam luctus vulputate. Quisque
            eu purus nec lorem imperdiet malesuada id sit amet dolor. Nunc sed libero ac nisl varius facilisis a id ligula. Nulla ut
            consequat mi. Donec a lacinia nisi.</p>
        </div>
    );
}

export default userOutput;

// <h1>UserOutput Component</h1>
