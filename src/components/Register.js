import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import './FormLoginRegister.css';
import { register } from '../redux/actions/auth';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeFirstName = e => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };

    const onChangeLastName = e => {
        const lastName = e.target.value;
        setLastName(lastName);
    };

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = () => {
        dispatch(register(firstName, lastName, email, password))
            .then((res) => {

                setSuccess(true);
                console.log('FE success:', success)
            })
            .catch(() => {
                setSuccess(false);
            });
    };

    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }
    return (
        <div className='signup'>
            <div className="col-md-12">
                <div id="cardContainer" className="card card-container">
                    <div>
                        {!success && (
                            <div>
                                <img src="logo2.png" alt="" textAlign="center" width={180} />
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        value={firstName}
                                        onChange={onChangeFirstName}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={lastName}
                                        onChange={onChangeLastName}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={onChangeEmail}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                        required
                                    />
                                </div>

                                <div className="form-group mt-3">
                                    <button onClick={handleRegister}
                                        className="btn btn-primary btn-block">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        )}

                        {message && (
                            <div className="form-group mt-3">
                                <div className={`alert alert-${success ? 'success' : 'danger'}`} role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <div style={{ color: "blue" }} className="nav-item mt-3">
                            <Link to={'/login'} className="nav-link">
                                Already have an account? Log in
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
