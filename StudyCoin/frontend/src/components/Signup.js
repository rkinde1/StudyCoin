import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const navigate = useNavigate();

    let handleSubmit = (e) => {
        if (verify !== password) {
            alert("Passwords do not match");
            e.preventDefault();
        }
        else if (username === '' || email === '' || firstName === '' || password === '' || verify === '') {
            alert("Please fill out all fields");
            e.preventDefault();
        }
        else {
            e.preventDefault();
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, firstName, password })
            })
                .then(res => res.json())
                .then(data => {
                    alert(data.message);
                    navigate('/Login');
                })
        }
    }
    return (
        <div>
            <h2>Sign up</h2>
            <form method="POST" action="/api/register" onSubmit={handleSubmit}>
                <div style={{"padding":"0px 100px 0px 0px"}}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br></br>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <br></br>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br></br>
                    <label htmlFor="verify">Verify Password: </label>
                    <input type="password" name="verify" id="verify" value={verify} onChange={(e) => setVerify(e.target.value)} />
                </div>
                <br></br>
                <button type="submit">Sign up</button>
            </form>
            <br></br>
            <p>Already have an account?</p>
            <a className="background" href="/Login">Login here</a>

        </div>
    )
}
