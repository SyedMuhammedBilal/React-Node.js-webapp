import React from 'react';

const Greet = (props) => {
    
    const {name, skills} = props
    return (
        <div>
            <h1>Hello, {name} your hobby is {skills} </h1>
            
        </div>
    )    
}

export default Greet