import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    //Once user inputs login information, information is sent to the backend
    let handleSubmit = async (e) => {
        e.preventDefault();
        fetch('/api/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({ email, password })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    alert("Incorrect email and password");
                }
            })
            .then(data => {
                alert(data.message);
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    navigate('/Connect');
                }
                //Here we will store token in localstorage
            }
        )
        .catch(err => console.log(err));
    }
    return (
        <div>
            <h2>Login:</h2>
            <form method="POST" action="/api/login" onSubmit={handleSubmit} >
                <div style={{"padding":"0px 100px 0px 0px"}}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <br></br>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br></br>
                <br></br>
                <button type="submit">Login
                </button>
            </form>
            <br></br>
            <a className="background" href="/Signup">Create an account</a>
        </div>
    )
}