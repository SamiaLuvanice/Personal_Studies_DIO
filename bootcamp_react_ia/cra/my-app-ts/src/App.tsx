import './App.css';
import logo from './logo.svg';
import { ENABLE_LOG, ORGANIZATION_NAME, RELEASE_DATE } from './settings';

function App() {

  if (ENABLE_LOG) {
    console.log("Nome da Organização:", ORGANIZATION_NAME);
    console.log("Data de Lançamento:", RELEASE_DATE);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
