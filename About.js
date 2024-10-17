import React from 'react'
import img from '../Images/Verticle.jpg'
import img1 from '../Images/Round.webp'
import { Link } from 'react-router-dom'

import team1 from '../Images/Sikandar.jpeg'


import team4 from '../Images/new.jpeg'
import { GoLaw } from "react-icons/go";
import { MdFamilyRestroom } from "react-icons/md";
import { GiHandcuffs } from "react-icons/gi";
import { GiClawHammer } from "react-icons/gi";
import { SiTicktick } from "react-icons/si";
import { ImHammer2 } from "react-icons/im";
import { ImLeaf } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";



const About = () => {
    return (
        <>
            <div className="container-fluid bg-breadcrumbs">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h3>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item "><Link className='text-info' style={{ textDecoration: 'none' }} to='/'  >Home</Link></li>
                        <li className="breadcrumb-item"><Link className='text-info' style={{ textDecoration: 'none' }} to={'/services'} >Services</Link></li>
                        <li className="breadcrumb-item active text-primary"><Link className='text-info' style={{ textDecoration: 'none' }} to='/about'>About</Link></li>
                    </ol>
                </div>
            </div>

            <div className="container-fluid about bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-img pb-5 ">
                                <img src={img} className="img-fluid  rounded-circle " style={{ objectFit: 'cover' }} alt="Image" />
                                <div className="about-img-inner">
                                    <img src={img1} className="img-fluid rounded w-100 h-100 mt-4" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="section-title text-start mb-5">
                                <h2 className="sub-title pe-3 mb-4 text-center About">About Us</h2>
                                <h1 className="display-3 mb-4 text-secondary">
                                    We are ready to help resolve your legal matters.</h1>
                                <p className="mb-4">We offer expert legal services to handle complex legal issues with professionalism and efficiency.</p>
                                <div className="mb-4">
                                    <p ><i className="fa fa-check black1 me-2" /><b> Diverse Legal Expertise</b></p>
                                    <p ><i className="fa fa-check black1  me-2" /><b> Client-Focused Approach</b></p>
                                    <p ><i className="fa fa-check black1 me-2" /><b> Proven Track Record</b></p>
                                </div>
                                <Link to='/apointment' className="btn   px-5 button1">Book Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid home1  py-5">
                <div className="container py-5">
                    <div className="section-title mb-5" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <hr style={{ height: '5px', background: 'black' }} />  <h2 className="sub-title text-white pb-2 display-4  text-center team1 " style={{ fontFamily: 'fantasy' }} >Meet our team</h2><hr style={{ height: '5px', background: 'black' }} />
                        </div>
                        <h1 className="display-3 mt-5 mb-4  text-white text-center teAM">Law Services from The Experts</h1>
                        <p className="mb-0 text-center team fw-bold">We offer expert legal services to handle complex legal issues with professionalism and efficiency. With our extensive experience and specialized knowledge, we provide strategic advice and robust representation to protect your interests and achieve favorable outcomes. Trust in our ability to deliver tailored solutions and navigate legal intricacies effectively.</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <div className="team-img rounded-top h-100">
                                    <img src={team1} style={{ height: '61vh' }} className="img-fluid rounded-top w-100" alt />

                                </div>
                                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                    <h5 className='team'>Sikandar Issa</h5>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded">
                                <div className="team-img rounded-top h-100">
                                    <img src={team4} style={{}} className="img-fluid rounded-top w-100" alt />

                                </div>
                                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                                    <h5 className='team'>Amber</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-white  feature py-5">
                <div className="container py-5">
                    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <hr></hr>
                            <h4 className="sub-title display-4 px-3 mb-3 text-center " style={{ fontFamily: 'fantasy' }}>Why Choose Us</h4>
                            <hr></hr>
                        </div>
                        <h1 className="display-3 mb-4 heading text-center "> We are ready to help resolve your legal matters</h1>
                        <p className="mb-0 text-center">Bee Law Firm provides top-tier legal services in civil cases (property, recovery, succession, possession), family cases (khula, maintenance, custody), criminal cases (bail, trial, FIR quashment), agricultural land disputes, corporate matters, and intellectual property. Notably, we secured plot possession and ownership declaration in Qamar ul Zaman Khan vs. Eden Housing Developers. Trust us to navigate complex legal challenges with expertise and efficiency.





                        </p>

                    </div>
                    <div className="row g-4 ">
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp " data-wow-delay="0.1s">
                            <div className="row-cols-1 row-cols-1 feature-item p-4  ">
                                <div className="col-12 ">
                                    <div className=" mb-4 feature-icon">
                                        <div className="p-3 d-inline-flex bg-white rounded">
                                            <GoLaw size={60} color="black" />

                                            <i className="fas fa-diagnoses fa-4x text-primary" />
                                        </div>
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-4">Civil Cases</h5>
                                        <ol >
                                            <li>Property Matters</li>
                                            <li>Recovery Matters</li>
                                            <li>Warasti Matters</li>
                                            <li>Stay Orders</li>



                                        </ol>                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="row-cols-1 feature-item p-4">
                                <div className="col-12">
                                    <div className="feature-icon mb-4">
                                        <div className="p-2 d-inline-flex rounded">
                                            <MdFamilyRestroom size={60} color="black" />
                                            <i className="fas fa-users fa-4x text-primary" />
                                        </div>
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-4">Family Cases</h5>
                                        <ol >
                                            <li>Khula (Divorce Initiated by Wife)
                                            </li>
                                            <li>Guardian Certificates</li>
                                            <li>Custody of Minors</li>
                                            <li>Harassment Cases</li>



                                        </ol>                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row-cols-1 feature-item p-4">
                                <div className="col-12">
                                    <div className="feature-icon mb-4">
                                        <div className="p-3 d-inline-flex  rounded">
                                            <GiHandcuffs size={60} color="black" />
                                            <i className="fas fa-spa fa-4x text-primary" />
                                        </div>
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-4">Criminal Cases</h5>
                                        <ol >
                                            <li>Bail
                                            </li>
                                            <li>Abduction</li>
                                            <li>Cancellation of Bail</li>
                                            <li>Quashment of FIR</li>



                                        </ol>                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="row-cols-1 feature-item p-4">
                                <div className="col-12">
                                    <div className="feature-icon mb-4">
                                        <div className="p-3 d-inline-flex bg-white rounded">
                                            <GiClawHammer size={60} color="black" />
                                            <i className="fas fa-heart fa-4x text-primary" />
                                        </div>
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-4">Specialized Cases</h5>
                                        <ol >
                                            <li>Bail
                                            </li>
                                            <li>Agricultural Land Disputes</li>
                                            <li>Corporate Matters</li>
                                            <li>Intellectual Property Matters
                                            </li>



                                        </ol>                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row-cols-1 feature-item p-4">
                                <div className="col-12">
                                    <div className="feature-icon mb-4">
                                        <div className="p-3 d-inline-flex  rounded">
                                            <SiTicktick size={60} color="black" />
                                            <i className="fab fa-pied-piper fa-4x text-primary" />
                                        </div>
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-4">Notable Case</h5>
                                        <p className="mb-0">              Successfully secured plot possession and declared client ownership, And Much More...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="row-cols-1 feature-item p-4">
                                <div className="col-12">
                                    <div className="feature-icon mb-4">
                                        <div className="p-3 d-inline-flex rounded">
                                            <ImHammer2 size={60} color="black" />
                                            <i className="fas fa-user-md fa-4x text-primary" />
                                        </div>
                                    </div>
                                    <div className="feature-content d-flex flex-column">
                                        <h5 className="mb-4">Numerous Other Casest</h5>
                                        <p className="mb-0">Proven track record of handling various legal matters effectively and successfully.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                            <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-3"><FaCircleArrowUp size={30} color="white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About
