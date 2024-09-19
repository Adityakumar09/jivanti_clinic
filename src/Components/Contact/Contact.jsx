import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import email from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import loc from '../../assets/location-icon.png'
import arr from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b42d1bd4-11e8-4b90-ad09-830290cbc76e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <h2 className="reviews-title" style={{padding:"20px 0px "}}>
                <span className="text-red">Have a Query related to your Disease?</span> <span className="text-blue"> Contact us</span>
            </h2>
            <div className="contact">
                <div className="contact-col">
                    <h3>Send us a message <img src={msg} alt="" /> </h3>
                    <ul>
                        <li><img src={email} alt="" />ayurvedexpert@gmail.com</li>
                        <li> <img src={phone} alt="" />+91-93104-73857  |  +91-98710-33775</li>
                        <li> <a href="https://www.google.com/maps/place/Jivanti+Ayurvedic+Centre/@28.6013518,77.081394,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1b3706a22fb7:0x48e2d701273983df!8m2!3d28.6013518!4d77.081394!16s%2Fg%2F11n73s6rjl?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"><img src={loc} alt="" /></a> RZ B-33, Street Number 2, opp. Dashrath Puri, near Dabri - <br />Palam Road, Mahavir Enclave I, New Delhi, Delhi, 110045</li>
                    </ul>
                    
                    {/* Embed Google Map with Pin */}
                    <iframe
                      width="90%"
                      height="300"
                      style={{border:"0"}}
                      allowFullScreen=""
                      loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCJIgwRSqwIaPubp9YsOUkxouTcB05XYqg
        &q=28.60140358354632,77.08140472493886
        &zoom=18`}
                  ></iframe>

                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>Your Name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' required />
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="Enter Your Email Address" required />
                        <label>Phone Number</label>
                        <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                        <label>Write your Message here</label>
                        <textarea name="message" rows="6" placeholder='Enter Your Message' required ></textarea>
                        <button type='submit' className="btn dark-btn">Submit Now <img src={arr} alt="" /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </>
    )
}

export default Contact;
