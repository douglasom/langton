import React from "react"

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            limitNumOfIterations: 2000,
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
        const intervalId = setInterval(this.run, 5)
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
        if (this.state.iterations < this.state.limitNumOfIterations) {
            this.setState({
                iterations: this.state.iterations + 1
            })
            this.props.action()
        }
    }

    setLimitNumOfIterations = (event) => {
        if (event.target.value) {
          const value = parseInt(event.target.value)
          const min = 1
          const max = 2000
          if (value < min || value > max) {
            window.alert("limit num of iterations should be between " + min + " and " + max)
          } else {
            this.setState({
              limitNumOfIterations: value
            })
          }
        }
      }
    
    
    render() {
        return <div>
            <div>Limit num of iterations: <input type="text" onBlur={this.setLimitNumOfIterations} /></div>
            <button onClick={this.startStop}>{this.state.startStopLabel}</button> <label>Iterations: {this.state.iterations}</label>
        </div>
    }
    
}

export default Timer
