import React from "react"

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.props.board,
      ant: this.props.ant,
      iteration: this.props.iteration
    }
  }

  render = () => {
    this.renderAnt()

    return (
        <label>{this.state.iteration}</label>
    )
  }


  renderAnt = () => {
    const canvas = this.props.antCanvas
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = 'black'
    ctx.fillRect(this.state.ant.x, this.state.ant.y, 1, 1)
  }
}

export default Board
