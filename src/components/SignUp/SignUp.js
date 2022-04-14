import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/home');
    }

    const handleCreateUser = event => {
        console.log(event)
        event.preventDefault();

        if (password === confirmPassword) {
            setError('Your password did not match')
            return;
        }
        if (password.length < 6) {
            setError('Your password must be at least 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="form-container">
            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className="form-title">Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>

                    <div className="input-group">
                        <label onBlur={handleConfirmPassword} htmlFor="Password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>

                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>
                <p className="create-account-link">
                    Already have an account? <Link className="form-link" to="/login">Login</Link>
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

export default SignUp;