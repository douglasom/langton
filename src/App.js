import './App.css';
import Timer from './Timer.js';
import Board from './Board.js';
import Ant from './Ant.js';
import React from 'react';

class App extends React.Component {

  createBoard = () => {
    const marginFactorForOverflow = 10
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
      ant: new Ant(board, 300, 200),
      iteration: 0,
      board: board
    }
  }

  antWalk = () => {
    const ant = this.state.ant
    ant.move()
    const iteration = this.state.iteration + 1
    console.log("stepped on (" + ant.x + ", " + ant.y + "), iteration " + iteration)
    this.setState({
      ant: ant,
      iteration: iteration
    })
  }
  render = () => {
    return (
      <div className="App">
        {this.header()}
        <Board ant={this.state.ant} antCanvas={document.getElementById("antCanvas")} iteration={this.state.iteration} board={this.state.board} />
        <Timer action={this.antWalk} />
      </div>
    )
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
