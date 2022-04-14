import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true })
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="form-container">
            <div>
                <form onSubmit={handleUserSignIn}>
                    <h2 className="form-title">Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p className="create-account-link">
                    New to Ema-John? <Link className="form-link" to="/signup">Create a new account</Link>
                </p>

                <div className="or-container">
                    <div className="left-side"></div>
                    <span className="small-title">or</span>
                    <div className="right-side"></div>
                </div>

                <button className="social-login-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />

                    <small className="google-login-btn">
                        Continue with Google
                    </small>
                </button>
            </div>
        </div>
    );
};

export default Login;