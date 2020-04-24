import React from 'react'

function child(props) {

    /* Alert Banner */

    return (
        <div>
            {/*<button onClick={props.greetHandler} >Greet Parent</button>*/}
            <button onClick={() => props.greetHandler('child')} >Greet Parent</button>
        </div>
    )
}

export default child
