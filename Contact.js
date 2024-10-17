import React from 'react'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";


const Contact = () => {
  return (
    <div>
      <div className="container-fluid bg-breadcrumbed">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us </h3>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item "><Link className='text-info' style={{ textDecoration: 'none' }} to='/'  >Home</Link></li>
            <li className="breadcrumb-item"><Link className='text-info' style={{ textDecoration: 'none' }} to={'/services'} >Services</Link></li>
            <li className="breadcrumb-item active text-primary"><Link className='text-info' style={{ textDecoration: 'none' }} to='/about'>About</Link></li>
          </ol>
        </div>
      </div>

      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style mb-4">
              <h4 className="sub-title text-white mb-0 fs-1">Contact Now</h4>
            </div>
            <p className="mb-0 text-white ">For legal assistance, contact Bee Law Firm via phone or email. For more details, explore our website and use our contact form for inquiries.

            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 col-xl-5 contact-form wow fadeInLeft" data-wow-delay="0.1s">
              <h2 className="display-5 text-white mb-2">Get in Touch</h2>
              <p className="mb-4 text-white">Please ensure that you fill out the contact information accurately to allow us to respond promptly and effectively to your inquiries. Providing correct details, including your phone number and email address, ensures that we can reach you without any delays and provide the best possible assistance for your legal needs. Your cooperation helps us serve you better.</p>
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating ">
                      <input type="text" required className="form-control bg-white text-dark box border border-primary" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="email" required className="form-control bg-white text-dark box border border-primary" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="phone" required className="form-control bg-white text-dark box border border-primary" id="phone" placeholder="Phone" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" required className="form-control bg-white box border border-primary" id="project" placeholder="Project" />
                      <label htmlFor="project">Your Case</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-white text-dark box border border-primary" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control bg-white border text-dark box border-primary" placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light text-primary w-100 py-3">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-2 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-transparent rounded">
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{ width: 90, height: 90, borderRadius: 50 }}><FaMapMarkerAlt size={40} className='text-primary' /></div>
                  <h4 className="text-white">Address</h4>
                  <p className="mb-0 text-white" > Office 30,Nisar Block Rizwan Garden Ext,Pakistan  </p>
                </div>
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{ width: 90, height: 90, borderRadius: 50 }}><FaPhoneAlt size={40} className='text-primary' />
                  </div>
                  <h4 className="text-white">Mobile</h4>
                  <p className="mb-0 text-white">+92 3265867976</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{ width: 90, height: 90, borderRadius: 50 }}><MdEmail size={40} className='text-primary' /></div>
                  <h4 className="text-white">Email</h4>
                  <p className="mb-0 text-white">info@example.com</p>
                  <p className="mb-0 text-white">info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 wow fadeInRight" data-wow-delay="0.3s">
              <div className="d-flex justify-content-center mb-4">
                <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 px-3 pt-3 pb-3 " style={{ height: '' }} to={'https://www.facebook.com/'} ><FaFacebookF size={30} /></Link>
                <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 px-3 pt-3 pb-3" ><RiTwitterXFill size={30} /></Link>
                <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 px-3 pt-3 pb-3" to={'https://www.instagram.com/accounts/login/?hl=en'} ><FaInstagram size={30} /></Link>
                <Link className="btn-square btn btn-primary text-white rounded-circle mx-1 px-3 pt-3 pb-3" to={'https://www.linkedin.com/in/hanzala-masood-009140269/'}><FaLinkedin size={30} /></Link>
              </div>
              <div className="rounded h-100">
                <iframe className="rounded w-100" style={{ height: 500 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.3156405712693!2d74.37724911131757!3d31.488006774121313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905dd172abce5%3A0x2c17043148dcb83b!2sRafi%20Group&#39;s%20Defence%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1719749960139!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                            <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-3"><FaCircleArrowUp size={30} color="white" />
                            </a>
                        </div>
      </div>
     

    </div>
  )
}

export default Contact
