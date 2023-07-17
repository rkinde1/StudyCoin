import './App.css';
import MetamaskSepoliaComponent from './components/MetamaskSepoliaComponent';
import Timer from './components/Timer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Button, Link, Text, StyledNavbar } from "@nextui-org/react";
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="background">
      <BrowserRouter forceRefresh={true}>
      <StyledNavbar style={{"background-color": "#252342", "font-weight": "bold", "opacity": "100%", "border": "1px black solid"}}>
        <Navbar.Content style={{"width": "100%"}}>
          <Navbar.Brand hideIn="xs"><a href="/"><img src={require('./components/StudyCoinLogo cropped.png')} alt="Study Coin Logo"></img></a></Navbar.Brand>
          <h1>StudyCoin</h1>
        </Navbar.Content>
        <Navbar.Content hideIn="xs" variant="highlight-rounded" style={{"padding": "10px 10px 10px 100px"}}>
          <Navbar.Link block color = "warning" href="/Connect">Connect</Navbar.Link>
          <Navbar.Link block color = "warning" href="/timer">Timer</Navbar.Link>
          {token ? <Navbar.Link href="/logout">Logout</Navbar.Link> : 
          ( 
            <>
            <Navbar.Link block color = "warning" href="/login">Login</Navbar.Link>
            <Navbar.Link block color = "warning" href="/signup">Signup</Navbar.Link>
          </>       
          )}
        </Navbar.Content>
      </StyledNavbar>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Connect" element={<MetamaskSepoliaComponent />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
