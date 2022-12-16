import React from 'react';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark bg-gradient">
            <div className='container-fluid'>
                <Link to={'/'} className="navbar-brand brand">
                    Socialidarity
                </Link>
                <div className="navbar-nav ml-auto">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <li className="nav-item">
                        <a href={'/login'} className="nav-link">
                            <BoxArrowRight size="30px" className='ml-3'/>
                        </a>
                    </li>

                </div>
            </div>

        </nav>
    )
}

export default Navbar;