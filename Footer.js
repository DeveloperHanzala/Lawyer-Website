import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container  py-2">
          <div className="row g-5">
            <div className="col-md-5 col-lg-5 col-xl-5">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4"><i className="fas fa-star-of-life me-3" />Bee Law Firm</h4>
                <p className='text-white mx-3'>We provide top-tier legal services in civil cases (property, recovery, possession), family cases (khula, custody), criminal cases (bail, trial), agricultural land disputes, corporate matters, and intellectual property
                </p>
                <div className="d-flex align-items-center">
                  <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 " to={'https://www.facebook.com/'} ><FaFacebookF size={25} /></Link>
                  <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 " ><RiTwitterXFill size={25} /></Link>
                  <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 " to={'https://www.instagram.com/accounts/login/?hl=en'} ><FaInstagram size={25} /></Link>
                  <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 " to={'https://www.linkedin.com/in/hanzala-masood-009140269/'}><FaLinkedin size={25} /></Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white ">Quick Links</h4>
                <Link to={'/'}><i className="fas  fa-angle-right me-2" /> Home</Link>
                <Link to={'about'}><i className="fas  fa-angle-right me-2" /> About Us</Link>
                <Link to={'/services'}><i className="fas  fa-angle-right me-2" /> Services</Link>
                <Link to='/contact' ><i className="fas fa-angle-right me-2" /> Contact Us</Link>
                <Link to='/apointment' ><i className="fas  fa-angle-right me-2" /> Appointment</Link>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Contact Info</h4>
                <a href><i className="fa fa-map-marker-alt " />Office 30,Nisar Block Rizwan Garden Ext,Pakistan</a>
                <a href><i className="fas fa-envelope " /> info@example.com</a>
                <a href><i className="fas fa-envelope " /> info@example.com</a>
                <a href><i className="fas fa-phone " /> +92 3265867976</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
