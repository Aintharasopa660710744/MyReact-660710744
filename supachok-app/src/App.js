import logo from './Paimon.png';
import './App.css';
import Hello from './Hello';  // import Hello component
import Goodbye from './Goodbye';  // import Hello component
function App() {
  return (
    <div className="App">
      <Hello />  {/* ใช้ Hello component */}
      <Goodbye />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TEST <code>Supachok</code> 660710744
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
