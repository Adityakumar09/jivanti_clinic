import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import { FaHandHoldingMedical, FaInstagram } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { FaHeartbeat } from "react-icons/fa";
import { FaFacebookF, FaYoutube} from 'react-icons/fa';
import { BsGraphUpArrow } from "react-icons/bs";
import { RiStarSFill } from "react-icons/ri";
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import doctor from '../../assets/doc pic.png'
import whatsapp4 from '../../assets/whatsapp-icon-4.png';
import google from '../../assets/google.png'; 
import google2 from '../../assets/google2.png'; 
import clin from '../../assets/bahar ka pic.jpg';
import go from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import { FaBookMedical } from "react-icons/fa6";
 
const Hero = () => {
  const slider = useRef();
    let tx=0 ;

    const slideforward=()=>{
        if(tx > -50){
            tx -= 25 ;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slidebackward=()=>{
        if(tx<0){
            tx+=25
        }
        slider.current.style.transform=`translateX(${tx}%)`
        
    }

  return (
    <>
    <div className="hero ">
      <div className="container">
        <div className="hero-content">
          <div className="clinic-info">
            <h1>Jivanti Ayurvedic Centre , Delhi</h1>
            <h4 >Clinic Address : <span style={{fontWeight:"400"}}>RZ B-33, Street Number 2, opp. Dashrath Puri,<br /> near Dabri -
            Palam Road, Mahavir Enclave I, New Delhi, 110045</span>  </h4>
            
            <div className="stats">
              <div className="stat-item">
              <FaHandHoldingMedical style={{color:"#74061C",fontSize:"22px", marginRight:"10px"}} />
                <div style={{display:"flex" }}> <p style={{color:"red",marginRight:"5px"}}>9600+</p> <p style={{color:"#0e6585"}} >  Consultation Done </p></div>
              </div>
              <div className="stat-item">
              <SlBadge  style={{color:"#74061C",fontSize:"22px", marginRight:"10px"}} />
                <div style={{display:"flex" }}> <p style={{color:"red",marginRight:"5px"}}>6+</p> <p style={{color:"#0e6585"}} >   Years of Experience </p></div>
              </div>
              <div className="stat-item">
              <FaHeartbeat  style={{color:"#74061C",fontSize:"22px", marginRight:"10px"}} />
                <div style={{display:"flex" }}> <p style={{color:"red",marginRight:"5px"}}>1653+</p> <p style={{color:"#0e6585"}} >  Heart Disease Patients Treated</p></div>
              </div>
              <div className="stat-item">
              <BsGraphUpArrow  style={{color:"#74061C",fontSize:"22px", marginRight:"10px"}} />
                <div style={{display:"flex" }}> <p style={{color:"red",marginRight:"5px"}}>1840+</p> <p style={{color:"#0e6585"}} >  Diabetes Patients Treated</p></div>
              </div>
            </div>
          </div>
          
          <div className="doctor-card">
            <div className="l9">
              <img src={doctor} alt="Dr. Aayushi Khandelwal" className="doctor-image" />
            </div>
            <div className="r9">
              <h3 style={{color:"#74061C"}}>Dr Vinay Kumar</h3>
              <div className="yublock"></div>
              <p style={{color:"#0E6585"}}>Ayurvedic Doctor</p>
              <p style={{color:"#0E6585"}}>23 Years Exp. Bachelor of Ayurveda, Medicine and Surgery (BAMS), Delhi</p>
              <p style={{color:"#0E6585"}}>Dr. Vinay Kumar is a trusted Ayurvedic Doctor in Dwarka, Delhi. He has helped
                 numerous patients in his 23 years of experience as a Ayurvedic Doctor.</p>
            </div>
          </div>
        </div>
        
        
        
        <a href="https://wa.me/9871033775" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp4} alt="WhatsApp" />
        </a>

        </div>
        <section>
      <div className="cta-section container">
      <div className="cta-item">
        <span>Want to Consult with Doctor?</span>
        <button className="cta-button">BOOK APPOINTMENT</button>
      </div>
      <div className="cta-item">
        <span>Clinic Direct Contact No</span>
        <button className="cta-button">+91 9871033775</button>
      </div>
      <div className="cta-item">
        <span>Clinic Visiting Timings</span>
        <p className='uiii'>10:00 AM - 09:00 PM</p>
      </div>
  </div>
  </section>

  <div className="follow-us-container">
      <h2 className="follow-us-title">
        <span className="text-red">Follow</span> <span className="text-blue">us</span>
      </h2>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/jivantiayurvediccentre?igsh=MTNzdmM4M2R0aTR4bg==" target="_blank" rel="noopener noreferrer" className="social-icon insta">
            <FaInstagram/>
          </a>
      </div>
    </div>

    <div className="google-reviews-section container">
        <h2 className="reviews-title">
          <span className="text-red">Live</span> <span className="text-blue">Google Reviews </span>
        </h2>
        <div className="con2">
          <div className="left2">
            <div className="l3">
              <img src={clin} alt="" />
            </div>
            <div className="r3">
              <div style={{width:"90%",fontWeight:"bold"}}>Jivanti Ayurvedic Centre Delhi</div>
              <div className="rating" style={{display:"flex",flexDirection:"row",gap:"2px"}}>
                <span style={{color:"#FB8E28"}}>5.0</span>
                <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
              </div>
              <p>Based on 40 reviews</p>
              <div className='oopty'>Powered By <img src={google} alt="powered by Google" className="google-logo" />
              </div>
              <a href="https://www.lybrate.com/delhi/clinic/jivanti-ayurvedic-centre" target="_blank" rel="noopener noreferrer" ><button className='oop'>review us on <img className='google-img' src={google2} alt="" /></button>
              </a>
            </div>
          </div>
          <div className='right2' >
            <img src={go} alt="" className='next-btn' onClick={slideforward}/>
            <img src={back} alt="" className='back-btn' onClick={slidebackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Vinay Kumar</h3>
                                    <span>6 Dec 2023</span>
                                    <div className="rating" style={{display:"flex",flexDirection:"row",gap:"2px"}}>
                                      <span style={{color:"#FB8E28"}}>5.0</span>
                                      <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                      <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                      <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                      <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                      <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                    </div>
                                </div>
                            </div>
                            <p>Knowledgeable doctor | Great customer service | Reasonably priced</p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Rajender</h3>
                                <span>20 May 2024</span>
                                <div className="rating" style={{display:"flex",flexDirection:"row",gap:"2px"}}>
                                  <span style={{color:"#FB8E28"}}>4.0</span>
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                </div>
                            </div>
                        </div>
                        <p>Professional counselling</p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Ashish Kumar</h3>
                                <span>9 Dec 2023</span>
                                <div className="rating" style={{display:"flex",flexDirection:"row",gap:"2px"}}>
                                  <span style={{color:"#FB8E28"}}>5.0</span>
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                </div>
                            </div>
                        </div>
                        <p>Effective medicines | Clean & hygienic</p>
                        </div>
                    </li>
                    <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>William Jackson 4</h3>
                                <span>Edusity,USA</span>
                                <div className="rating" style={{display:"flex",flexDirection:"row",gap:"2px"}}>
                                  <span style={{color:"#FB8E28"}}>5.0</span>
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                  <RiStarSFill style={{color:"#FB8E28" , fontSize:"20px"}} />
                                </div>
                            </div>
                        </div>
                        <p>Good experience</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        </div>
    </div>

    <section>
      <div className="container ty ">
        <div className="l4">
        <img src={clin} alt="" />
        </div>
        <div className="r4">
          <span style={{fontSize:"30px",fontWeight:"bold"}}>Jivanti Ayurvedic Centre: A Trusted Name in Holistic Healthcare</span>
          <span>Jivanti Ayurvedic Centre has established itself as a reliable destination for those seeking natural and holistic treatments for a variety of chronic health conditions. With a commitment to healing and rejuvenating the body, the centre offers personalized care that not only alleviates symptoms but also restores balance and strengthens overall well-being. </span>
          <div className='features'>
            <div className="gh1">
              <div className="sym"><FaHandHoldingMedical style={{color:"#6EC1E4",fontSize:"22px"}}/></div>
              <div className="sym-con">10 Lac+ Patients Treated Successfully</div>
            </div>
            <div className="gh1">
            <div className="sym"><SlBadge style={{color:"#777777",fontSize:"22px",paddingLeft:"10px"}} /></div>
              <div className="sym-con">200+ Awards & Recognition</div>       
            </div>
            <div className="gh1">
            <div className="sym"><FaBookMedical  style={{color:"#777777",fontSize:"22px"}} /></div>
              <div className="sym-con">
              100+ Research Papers & Trials</div>       
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
    
  </>
  );
};

export default Hero;