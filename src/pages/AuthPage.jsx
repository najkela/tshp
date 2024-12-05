import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true); // State za prebacivanje između Login i Register

    return (
        <div>
            {isLogin ? (
                <Login />
            ) : (
                <Register />
            )}
            <p>
                {isLogin ? "Nemate nalog?" : "Već imate nalog?"}{" "}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    style={{
                        border: "none",
                        background: "none",
                        color: "blue",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}
                >
                    {isLogin ? "Registrujte se" : "Prijavite se"}
                </button>
            </p>
        </div>
    );
};

export default AuthPage;
