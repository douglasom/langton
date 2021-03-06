import React from "react"

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: this.props.board,
      ant: this.props.ant
    }
  }

  render = () => {
    this.renderAnt()

    return (
        <div></div>
    )
  }


  renderAnt = () => {
    const canvas = this.props.antCanvas
    const ctx = canvas.getContext("2d")
    if (this.state.board && this.state.board[this.state.ant.x][this.state.ant.y]) {
      ctx.fillStyle = 'white'
    } else {
      ctx.fillStyle = 'black'
    }
    ctx.fillRect(this.state.ant.x, this.state.ant.y, 1, 1)
  }
}

export default Board
