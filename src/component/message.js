import React, {Component} from "react";

class message extends Component{

    constructor(){

        super()
        this.state = {
            message : "Welcome Visitor"
        }

    }
    changeMessage() {
        this.setState({
                message: "Thank for visiting..."
        })
    }

    render(){
        return(
                <div>

            <h1>{this.state.message}</h1>
            <button onClick = {()=> this.changeMessage()}>click here</button>
                </div>
        )
    }
}

export default message;