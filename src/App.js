import './App.css';
import Timer from './Timer.js';
import Canvas from './Canvas.js';

function antWalk() {
  console.log("another step.")
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Langton's Ant.
        </p>
      </header>
      <Canvas />
      <Timer action={antWalk} />
    </div>
  )
}

export default App;
