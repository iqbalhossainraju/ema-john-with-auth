import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate('');

    const handleName = event => {
        setName(event.target.value);
    }
    const handleAddress = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumber = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        console.log(event)
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }
    return (
        <div className="form-container">
            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className="form-title">This is Shipment</h2>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleName} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="address" id="" required />
                    </div>

                    <div className="input-group">
                        <label onBlur={handlePhoneNumber} htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>

                    <input className="form-submit" type="submit" value="Add Shopping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;