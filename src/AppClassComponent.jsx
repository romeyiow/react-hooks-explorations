import React from "react";


class AppClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <>
                <button onClick={this.decrement}>-</button>
                <span> &emsp;{this.state.count}&emsp;</span>
                <button onClick={this.increment}>+</button>

            </>
        )
    }
}

export default AppClassComponent;