import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className="navbar w-100 navbar-expand-lg ">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand  text-white" >Bee Law Firm</Link>
          <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 fs-5   ">
              <li className="nav-item">
                <Link to='/' className="nav-link active text-white" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link text-white" >About Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className="nav-link text-white" >Services</Link>
              </li>

              <li className="nav-item">
                <Link to='/contact' className="nav-link text-white" >Contact Us</Link>
              </li>

            </ul>
            <Link to='/apointment' className="btn btn-outline-info" type="submit">Book Appointment</Link>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
