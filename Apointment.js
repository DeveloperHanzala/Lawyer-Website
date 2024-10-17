import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import img1 from '../Images/Gavel.webp'
import { Link } from 'react-router-dom'
import Auth from './Auth';
import { useNavigate } from 'react-router-dom';


const Apointment = () => {

  const form = useRef();
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ikgtlgy', 'template_kh15ufj', form.current, {
        publicKey: 'Wj8h-C0_E4ESyXbxi',
      })
      .then(
        () => {
          setAlert('Email sent successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

   
  };
  return (
    <div>
       <div className="container-fluid bg-breadcrumb">
  <div className="container text-center py-5" style={{maxWidth: 900}}>
    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Book Appointment</h3>
    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item "><Link className='text-primary' style={{ textDecoration: 'none' }} to='/'  >Home</Link></li>
                        <li className="breadcrumb-item"><Link className='text-primary' style={{ textDecoration: 'none' }} to={'/services'} >Services</Link></li>
                        <li className="breadcrumb-item active "><Link className='text-primary' style={{ textDecoration: 'none' }} to='/about'>About</Link></li>
                    </ol>   
  </div>
</div>

<div>
  <div className="container-fluid appointment py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
          <div className="section-title text-start">
            <h4 className="sub-title pe-3 mb-2 text-info">Best Solutions To Your Issues</h4>
            <h1 className="display-4 mb-4">
            Best Quality Legal Services with Minimal Stress </h1>
            <p className="mb-4 text-white">We provide top-quality legal services with minimal stress and hassle, ensuring your legal matters are handled efficiently and professionally. Trust Bee Law Firm to navigate complex legal challenges smoothly, protecting your interests with expertise and care.</p>
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="d-flex flex-column h-100">
                  <div className="mb-4">
                    <h5 className="mb-3 text-info"><i className="fa fa-check me-2" />Exceptional Legal Services</h5>
                    <p className="mb-0 text-white">At Bee Law Firm, we are dedicated to delivering top-quality legal services tailored to meet your specific needs. Our experienced team of legal professionals ensures that every aspect of your case is handled with the utmost care and attention to detail.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-3 text-info"><i className="fa fa-check  me-2" />Stress-Free Legal Solutions</h5>
                    <p className="mb-0 text-white">Navigating legal challenges can be daunting, but with Bee Law Firm by your side, you can expect a smooth and stress-free experience. Our commitment to minimizing hassle means that we manage all the complexities of your legal matters, allowing you to focus on what matters most to you. </p>
                  </div>
                  <div className="text-start mb-4">
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="video h-100">
                  <img src={img1} className="img-fluid rounded w-100" style={{objectFit: 'cover'}} alt='Gavel' />
                  
                    <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
          <div className="appointment-form rounded p-5">
            <p className="fs-4 text-uppercase text-info">Get In Touch</p>
            <h1 className="display-5 mb-4">Get Appointment</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row gy-3 g-3 gx-4">
                <div className="col-xl-6 form-floating ">
               
                  <input type="text" name='first_name' required className="form-control bg-white text-dark box border border-primary" placeholder="First Name" />
                  <label htmlFor="name" className='mx-3'>Your Name</label>
                </div>
                <div className="col-xl-6 form-floating  ">
                <input type="email" name='e-mail'  required className="text-dark box form-control py-3 border-primary bg-white " placeholder="Email" />
                <label htmlFor="email" className='mx-3'>Your Email</label>
                </div>
                <div className="col-xl-6 form-floating">
                  <input type="phone" required name='number' className=" box form-control py-3 border-primary bg-white " placeholder="Phone" />
                  <label htmlFor="phone" className='mx-3'>Phone</label>
                </div>
                <div className="col-xl-6 form-floating">
                  <select name='gender' required className="box form-select py-3 border-primary bg-white " aria-label="Default select example">
                    
                    <option hidden>Your Gender</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Others</option>
                  </select>
                </div>
                <div className="col-xl-6">
                  <input type="date" required className="box form-control py-3 border-primary bg-white   " />
                </div>
                <div className="col-xl-6 ">
                  <select name='department' required className="box form-select py-3 border-primary bg-white " aria-label="Default select example">
                    <option className='text-white' hidden>Department</option>
                    <option value={'civil'}>Civil</option>
                    <option value={'family'}>Family</option>
                    <option value={'criminal'}>Criminal</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea className="box form-control border-primary bg-white" name="message" id="area-text" cols={30} rows={5} placeholder="Write Comments" defaultValue={""} />
               
                </div>
                <div className="col-12">
                {alert && <div className="alert alert-success">{alert}</div>}
                  <button  type="submit" value="Send" className="btn btn12 btn-light text-primary w-100 py-3">SUBMIT NOW</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>

          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Apointment
