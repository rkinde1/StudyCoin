import './App.css';
import MetamaskSepoliaComponent from './components/MetamaskSepoliaComponent';
import Timer from './components/Timer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "@nextui-org/react";

function App() {
  return (
    //This is where our rouuter will be
    <BrowserRouter>
    <Navbar>
      <Navbar.Brand><img src={require('./components/StudyCoinLogo.png')} alt="Study Coin Logo"></img></Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link href="/">Connect</Navbar.Link>
        <Navbar.Link href="/timer">Timer</Navbar.Link>
      </Navbar.Content>
    </Navbar>
    <h1>StudyCoin</h1>
      <Routes>
        <Route path="/" exact element={<MetamaskSepoliaComponent />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
