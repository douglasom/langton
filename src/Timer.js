import React from "react"

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            iterations: 0,
            startStopLabel: "Start"
        }
    }

    startStop = () => {
        if (this.running()) {
            this.stop()
        } else {
            this.start()
        }
    }

    componentWillUnmount = () => {
        this.stop()
    }
    
    start = () => {
        const intervalId = setInterval(this.run, 10)
        this.setState({
            intervalId: intervalId,
            startStopLabel: "Stop"
        })
    }

    stop = () => {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId)
            this.setState({
                intervalId: null,
                startStopLabel: "Start"
            })
        }
    }

    running = () => {
        return this.state.intervalId != null
    }

    run = () => {
        this.setState({
            iterations: this.state.iterations + 1
        })
        this.props.action()
    }
    
    render() {
        return <div>
            <button onClick={this.startStop}>{this.state.startStopLabel}</button> <label>Iterations: {this.state.iterations}</label>
        </div>
    }
    
}

export default Timer
