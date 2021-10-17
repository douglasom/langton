import React from "react"

class Timer extends React.Component {
    start = () => {
        setInterval(this.props.action, 1000)
    }
    
    render() {
        return (
            <button onClick={this.start}>Start</button>
        )
    }
    
}

export default Timer
