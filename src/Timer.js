import React from "react"

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            iterations: 0
        }
    }

    start = () => {
        const intervalId = setInterval(this.run, 1000)
        this.setState({intervalId: intervalId})
    }

    componentWillUnmount = () => {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId)
        }
    }

    run = () => {
        this.setState({
            iterations: this.state.iterations + 1
        })
        this.props.action()
    }
    
    render() {
        return <div>
            <button onClick={this.start}>Start</button> <label>Iterations: {this.state.iterations}</label>
        </div>
    }
    
}

export default Timer
