import React, { Component } from 'react';

class Welcome extends Component {
    render(){
        const {name, skills} = this.props
        return (
            <h1>
                Welcome {name} your skill is {skills}
            </h1>
        )
    }
}

export default Welcome