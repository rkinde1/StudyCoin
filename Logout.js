import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout () {
    const navigate = useNavigate();
    const logout = () => {
        alert("You have been logged out successfully.");
        localStorage.removeItem('token');
        localStorage.removeItem('walletAddress');
        localStorage.clear();
        navigate("/login");
        window.location.reload();
      }
    return (
        <div>
            <h2 style={{color: "red"}}>Are you sure you want to logout?</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
};

export default Logout;