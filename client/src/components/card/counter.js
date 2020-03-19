import React from "react";
import Index from "../card/index";

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count +1 });
    }
    handleIncrement2 = () => {
        this.setState({ count: this.state.count +1 });
    }

    render(){
        return (
            <div>
                <Index
                count={this.state.count}
                handleIncrement={this.handleIncrement}
                handleIncrement2={this.handleIncrement2}
                />
            </div>
        );
    }
}

export default Counter;