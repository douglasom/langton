function start(action) {
    setInterval(action, 1000)
}

function Timer(props) {
    return (
        <button onClick={start(props.action)}>Start</button>
    )
}

export default Timer
