import './App.css';
import MetamaskSepoliaComponent from './components/MetamaskSepoliaComponent';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        <MetamaskSepoliaComponent />
        <Timer />
      </header>
    </div>
  );
}

export default App;
