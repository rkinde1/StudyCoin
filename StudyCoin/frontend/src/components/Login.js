import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
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
                body: JSON.stringify({username, password})
            })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                //Here we will store token in localstorage
                if (data.success) {
                    navigate('/Connect');
                } else {
                    alert('Incorrect username or password');
                }
            }
        )
    }
    return (
        <div>
            <h2>Login</h2>
            <form method="POST" action="/api/login" onSubmit={handleSubmit} >
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br></br>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <button type="submit" onClick={() => navigate('/Connect')}>Login</button>
            </form>
            <a href="/Signup">Sign up here</a>
        </div>
    )
}