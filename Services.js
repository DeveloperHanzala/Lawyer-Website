import React from 'react'
import { Link } from 'react-router-dom';
import Img1 from '../Images/Civil.jpg'
import Img2 from '../Images/family.jpg'
import Img3 from '../Images/Criminal.webp'
import Img4 from '../Images/Specialized.webp'
import Img5 from '../Images/noteable.webp'
import Img6 from '../Images/Other.webp'
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import service1 from '../Images/Service1.jpg';
import service2 from '../Images/Service2.jpg'
import service3 from '../Images/Service3.jpg'
import service4 from '../Images/Service4.jpg'
import service5 from '../Images/Service5.jpg'
import service6 from '../Images/Service6.jpg'
import { FaCircleArrowUp } from "react-icons/fa6";


const Services = () => {
  return (
    <div>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Services</h3>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item "><Link className='text-warning' style={{ textDecoration: 'none' }} to='/'  >Home</Link></li>
            <li className="breadcrumb-item"><Link className='text-warning' style={{ textDecoration: 'none' }} to={'/services'} >Services</Link></li>
            <li className="breadcrumb-item active text-primary"><Link className='text-warning' style={{ textDecoration: 'none' }} to='/about'>About</Link></li>
          </ol>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="sub-style">
              <hr className='headi1' /> <h4 className="display-4 px-3 mb-1 text-center headi1">What We Do?</h4><hr className='headi1' />
            </div>
            <h1 className="display-4 mb-4 mt-5 text-center  services">Get The Best Services In Town</h1>
            <p className="mb-0 text-center text-dark">We provide the best law services in town, ensuring expert handling of complex legal matters with professionalism and efficiency. Our extensive experience and specialized knowledge allow us to offer strategic advice and robust representation. Trust us to deliver tailored solutions and navigate legal intricacies effectively to protect your interests.</p>
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





      </div>

 <div>
  <div className="container-fluid back10 mb-1">
    <div className="row">
      <div className="col-12 text-center">
        <div className='container'>
        <h2 className="display-4 my-4 fs-bold  text-white "><strong>Our Firm Helps Clients <br/> With
        Family Law and Divorce Matters</strong></h2>
        <p className="mb-5 text-white">Our team of experienced lawyers and attorneys is committed to providing the best legal services in town. They have extensive experience and specialized knowledge, ensuring that they can offer strategic advice and robust representation to protect your interests.</p>
      </div></div>
     
       
      <div className="container">
  <div className="row">
   
    <div className="col-12 d-flex justify-content-between">
      <a className="btn btn-transparent mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
      <HiArrowSmLeft size={40} color='white' />

      </a>
      <a className="btn btn-transparent mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
      <HiArrowSmRight size={40} color='white' />
      </a>
    </div>
    <div className="col-12 mb-4 mx-1">
      <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="">
                  <img className="img-fluid w-100 rounded" alt="100%x280" style={{height:'40vh'}} src={service1} />
                   
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="  ">
                  <img className="img-fluid rounded" alt="100%x280" style={{height:'40vh'}}  src={service2} />
                   
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="  ">
                  <img className="img-fluid rounded" alt="100%x280" style={{height:'40vh'}}  src={service3} />
                   
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4   mb-3">
                <div className="  ">
                  <img className="img-fluid w-100 rounded" alt="100%x280" style={{height:'40vh'}}  src={service4}/>
                   
                </div>
              </div>
              <div className="col-md-4  mb-3">
                <div className="  ">
                  <img className="img-fluid w-100 rounded" alt="100%x280" style={{height:'40vh'}}  src={service5} />
                   
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="  ">
                  <img className="img-fluid w-100 rounded" alt="100%x280" style={{height:'40vh'}}  src={service6} />
                   
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
 </div>
 <div className="col-12 p-4 text-center wow fadeInUp" data-wow-delay="0.2s">
                            <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-3"><FaCircleArrowUp size={30} color="white" />
                            </a>
                        </div>

 </div> </div>
  )
}

export default Services
