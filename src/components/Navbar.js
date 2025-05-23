import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Text Utilities</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-a" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item ps-2">
                            <Link className="nav-a" to="About">About</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.changeMode} id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

//Give datatypes to props:
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    btnvalue: PropTypes.string
}
//Give default value to props:
Navbar.defaultProps = {
    title: 'TextUtils',
}

