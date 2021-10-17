import './App.css';
import Timer from './Timer.js';
import Board from './Board.js';
import Ant from './Ant.js';
import React from 'react';

class App extends React.Component {

  createBoard = () => {
    const w = 600
    const h = 400
    const board = []
    for (let i = 0; i < w; i++) {
      board[i] = []
      board[i].fill(false, 0, h)
    }
    return board
  }

  constructor() {
    super()
    const board = this.createBoard()
    this.state = {
      limitNumOfIterations: 20000,
      ant: new Ant(board, 300, 200),
      board: board
    }
  }

  antWalk = () => {
    const ant = this.state.ant
    ant.move()
    this.setState({
      ant: ant
    })
  }
  render = () => {
    return (
      <div className="App">
        {this.header()}
        <Board ant={this.state.ant} antCanvas={document.getElementById("antCanvas")} board={this.state.board} />
        <Timer action={this.antWalk} />
        <div>Place ant X: <input type="text" onBlur={this.setX} /> Y: <input type="text" onBlur={this.setY} /></div>
      </div>
    )
  }

  setX = (event) => {
    this.setCoordinate("x", event.target.value)
  }

  setY = (event) => {
    this.setCoordinate("y", event.target.value)
  }

  setCoordinate = (xOrY, value) => {
    if (value) {
      const ant = this.state.ant
      ant[xOrY] = value
      this.setState({ant: ant})
    }
  }

  header = () => {
    return <header className="App-header">
      <p>
        Langton's Ant.
      </p>
    </header>
  }
}

export default App;
