import React from 'react'
import './style.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark py-3">
                <div className="container">
                    <a className="navbar-brand h4" href="javascript:void(0)">COMPANY LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="mynavbar">
                        <ul className="navbar-nav me-auto mx-5 ">
                            <li className="nav-item mx-3">
                                <a className="nav-link h5" href="javascript:void(0)">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h5" href="javascript:void(0)">Blogs</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h5" href="javascript:void(0)">Services</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h5" href="javascript:void(0)">Contact</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h5" href="javascript:void(0)">About</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h5" href="javascript:void(0)">Join</a>
                            </li>
                        </ul>
                        <form className="d-flex px-3">
                            <button type="button" className="btn btn-outline-secondary  text-white main-btn">GET APP</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar