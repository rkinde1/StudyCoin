import './App.css';
import MetamaskSepoliaComponent from './components/MetamaskSepoliaComponent';
import Timer from './components/Timer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "@nextui-org/react";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="background">
      <BrowserRouter>
      <Navbar>
        <Navbar.Brand><a href="/"><img src={require('./components/StudyCoinLogo.png')} alt="Study Coin Logo"></img></a></Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="/Connect">Connect</Navbar.Link>
          <Navbar.Link href="/timer">Timer</Navbar.Link>
          <Navbar.Link href="/login">Login</Navbar.Link>
          <Navbar.Link href="/signup">Signup</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <h1>StudyCoin</h1>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Connect" element={<MetamaskSepoliaComponent />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
