import React, { Component } from 'react'

class Usergreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false     
        }
    }
    

    render() {

        //let message
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Bilal
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
        //return (

        //this.state.isLoggedIn ? (
            //<div>Welcome Bilal</div>
        //):(
            //<div>Welcome Guest</div>
        //)


            //<div>{message}</div>
            //<>
                //<div>
                //Welcome Bilal   
                //</div>
                //<div>
                //welcome Guest
                //</div>
            //</div>
       // )
    }
}

export default Usergreeting
