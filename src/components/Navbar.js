import React, { useCallback } from 'react';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/auth';

const Navbar = () => {

    const dispatch = useDispatch();
    const handleLogout = useCallback(() => {
        dispatch(logout());
      }, [dispatch]);
    return (
        
        <nav className="navbar navbar-dark bg-dark navbar-expand fixed-top" >
            <div className='container-fluid'>
                <Link to={'/'} className="navbar-brand brand">
                    <img src="logo.png" width={180} alt="Socialidarity Logo" />
                </Link>
                <div className="navbar-nav ml-auto">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <li className="nav-item">
                        <a href={'/login'} className="nav-link" onClick={handleLogout}>
                            <BoxArrowRight size="30px" className='ml-3' />
                        </a>
                    </li>

                </div>
            </div>

        </nav>
    )
}

export default Navbar;