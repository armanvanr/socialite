import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './FormLoginRegister.css';
import { login } from '../redux/actions/auth';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeEmail = e => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = e => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = () => {
        setLoading(true);

        dispatch(login(email, password))
            .then(() => {
                navigate('/home');
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
    };

    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <div className='login'>
            <div className="col-md-12">
                <div id="cardContainer" className="card card-container">
                    <div>
                        <img src="logo2.png" alt="" width={180} />
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

                        {message && (
                            <div className="form-group mt-3">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}

                        <div className="form-group mt-3">
                            <button onClick={handleLogin}
                                className="btn btn-primary btn-block"
                                disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm" />
                                )}
                                <span>Log In</span>
                            </button>
                        </div>
                        <div style={{ color: "blue" }} className="nav-item mt-3">
                            <Link to={'/register'} className="nav-link">
                                Not have an account? Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
