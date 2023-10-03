import React from "react";
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color';
import { Link } from "react-router-dom";


export default function Navbar(props) {
 
  return (
    <>
    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
              <Link a className="navbar-brand" to="/">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link a className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link a className="nav-link" to="/About">{props.About}</Link>
                  </li>
                </ul>
                <div>
                <div className="container mx-3">
                
                
                </div>
                
        </div>
                 {/* dark mode colour change */}

                    <div>{props.mode==='dark'?<CirclePicker
                        color={props.selectedColor}
                        onChangeComplete={props.onColorChange}
                        circleSpacing={10}
                        circleSize={15}
                        width="240px"
                    />:''}</div>
                
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input onClick={props.toggleMode}   className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?"enable light mode":"enable dark mode"}</label>
                </div>
                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

              </div>
            </div>
          </nav>
    </div>
    </>
  )
}

Navbar.propTypes = {
        title: PropTypes.string,
        About: PropTypes.string
};

