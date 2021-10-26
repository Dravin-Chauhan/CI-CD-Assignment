import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Docker Setup For React Application</p>
        <a
          className="App-link"
          href="https://docs.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Docker
        </a>
      </header>
    </div>
  );
}

export default App;
