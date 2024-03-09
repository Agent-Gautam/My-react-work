import Container from "./components/Container.jsx"
import './App.css';
import { useState } from "react";

function App() {
  const [text,settext] = useState(true);
  const xstyle = {
    opacity : text ? 0.6 : 1
  }
  const ostyle = {
    opacity : !text ? 0.6 : 1
  }
  return (
    <div className="App" onClick={() => settext(prev => !prev)}>
      <div className="x" style={xstyle}>X</div>
      <div className="header">Tic Tac Toe</div>
      <Container />
      <div className="o" style={ostyle}>O</div>
    </div>
  );
}

export default App;
