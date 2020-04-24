import React, { Component } from 'react'
import Child from './child.component'

class parent extends Component {

    /* Alert Banner */

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    

    render() {
        return (
            <div>
                <Child greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default parent
