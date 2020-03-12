import React, { Component } from "react";

class Form extends Component {
    state= {userInput:""}

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    render(){
        return(
            <form>
            <textarea name="userInput" className="form-control" value={this.state.userInput}
            onChange={this.handleChange}>
        
                   
             </textarea></form>
        );
    }


}
export default Form;