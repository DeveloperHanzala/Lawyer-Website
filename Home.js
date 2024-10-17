import React from 'react'

import { Link } from 'react-router-dom'
import team1 from '../Images/Sikandar.jpeg'
import team4 from '../Images/new.jpeg'
import Img1 from '../Images/Civil.jpg'
import Img2 from '../Images/family.jpg'
import Img3 from '../Images/Criminal.webp'
import Img4 from '../Images/Specialized.webp'
import Img5 from '../Images/noteable.webp'
import Img6 from '../Images/Other.webp'
import { FaCircleArrowUp } from "react-icons/fa6";




const Home = () => {
  return (
    <div >

      <div className="container-fluid bg-breadcrumbed">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4 wow fadeInDown " data-wow-delay="0.1s">Home </h3>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item "><Link className='text-info' style={{ textDecoration: 'none' }} to='/'  >Home</Link></li>
            <li className="breadcrumb-item"><Link className='text-info' style={{ textDecoration: 'none' }} to={'/services'} >Services</Link></li>
            <li className="breadcrumb-item active text-primary"><Link className='text-info' style={{ textDecoration: 'none' }} to='/about'>About</Link></li>

          </ol>

        </div>
      </div>

      <div className="container-fluid home1  py-5">
        <div className="container py-5">
          <div className="section-title mb-5" data-wow-delay="0.1s">
            <div className="sub-style">
              <hr />  <h2 className="sub-title text-light pb-2 display-4  text-center team1 " style={{ fontFamily: 'fantasy' }} >Meet our team</h2><hr />
            </div>
            <h1 className="display-3 mt-5 mb-4  text-white text-center teAM">Law Services from The Experts</h1>
            <p className="mb-0 text-center team fw-bold">We offer expert legal services to handle complex legal issues with professionalism and efficiency. With our extensive experience and specialized knowledge, we provide strategic advice and robust representation to protect your interests and achieve favorable outcomes. Trust in our ability to deliver tailored solutions and navigate legal intricacies effectively.</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-5 col-lg-4 col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded">
                <div className="team-img rounded-top h-100">
                  <img src={team1} style={{ height: '65vh' }} className="img-fluid rounded-top w-100" alt />

                </div>
                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                  <h5 className='team'>Sikandar Issa</h5>

                </div>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item rounded">
                <div className="team-img rounded-top h-100">
                  <img src={team4} style={{ height: '65vh' }} className="img-fluid rounded-top w-100" alt />

                </div>
                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                  <h5 className='team'>Amber</h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="sub-style">
              <hr className='headi1' /> <h4 className="display-4 px-3 mb-1 text-center headi1">What We Do?</h4><hr className='headi1' />
            </div>
            <h1 className="display-4 mb-4 mt-5 text-center text-dark services">Get The Best Services In Town</h1>
            <p className="mb-0 text-center ">We provide the best law services in town, ensuring expert handling of complex legal matters with professionalism and efficiency. Our extensive experience and specialized knowledge allow us to offer strategic advice and robust representation. Trust us to deliver tailored solutions and navigate legal intricacies effectively to protect your interests.</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={Img1} style={{ height: '16em' }} className="img-fluid rounded-top w-100" alt />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 >Civil Cases
                    </h5>
                    <ol >
                      <li>Property Matters</li>
                      <li>Recovery Matters</li>
                      <li>Warasti Matters</li>
                      <li>Stay Orders</li>



                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={Img2} style={{ height: '16em' }} className="img-fluid rounded-top w-100" alt />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 >Family Cases
                    </h5>
                    <ol >
                      <li>Khula (Divorce Initiated by Wife)
                      </li>
                      <li>Guardian Certificates</li>
                      <li>Custody of Minors</li>
                      <li>Harassment Cases</li>



                    </ol>            </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={Img3} style={{ height: '16em' }} className="img-fluid rounded-top w-100" alt />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5>Criminal Cases
                    </h5>
                    <ol >
                      <li>Bail
                      </li>
                      <li>Abduction</li>
                      <li>Cancellation of Bail</li>
                      <li>Quashment of FIR</li>



                    </ol>                 </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={Img4} style={{ height: '16em' }} className="img-fluid rounded-top w-100" alt />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 >Specialized Cases
                    </h5>
                    <ol >
                      <li>Bail
                      </li>
                      <li>Agricultural Land Disputes</li>
                      <li>Corporate Matters</li>
                      <li>Intellectual Property Matters
                      </li>



                    </ol>              </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={Img6} style={{ height: '16em' }} className="img-fluid rounded-top w-100" alt />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Numerous Other Cases</h5>
                    <p className="mb-5">Proven track record of handling various legal matters effectively and successfully.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={Img5} style={{ height: '16em' }} className="bg-white img-fluid rounded-top w-100" alt />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Notable Case</h5>
                    <p className="mb-4">
                      Successfully secured plot possession and declared client ownership, And Much More...
                    </p>
                  </div>
                </div>
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
  )
}

export default Home
