import React, { useState } from 'react';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>StudyCoin</h1>
            <p>Connect your wallet to get started!</p>
        </div>
    )
}