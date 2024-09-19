import React, { useState } from 'react';
import './Programs.css';
import skin from '../../assets/skin_dis.jpg';
import liver from '../../assets/liver_dis.jpeg';
import kidney from '../../assets/kidneystone.jpg';
import infertility from '../../assets/infertility.jpg';
import hairfall from '../../assets/hairfall.jpg';
import sinusitis from '../../assets/sinusitis.jpg';
import rhinitis from '../../assets/rhinitis.jpg';
import asthma from '../../assets/asthma.jpg';
import Slider from 'react-slick';
import user1 from '../../assets/bahar ka pic.jpg';
import user2 from '../../assets/clinic_int.jpg';
import user3 from '../../assets/cllinic_pic.jpg';
import user4 from '../../assets/mummy_pic.jpg';
import user5 from '../../assets/eyechk2.jpg';



const Programs = () => {

    const [activeDisease, setActiveDisease] = useState('Thyroid');

    const diseases = ['Thyroid', 'Psoriasis', 'Inter-Vertebral Disc Prolapses', 'Joint Pain'];
    const info = {
        'Thyroid': [
            "Thyroid disorders, including hypothyroidism and hyperthyroidism, are conditions affecting the thyroid gland, which plays a crucial role in regulating metabolism, energy levels, and hormonal balance. Hypothyroidism results from an underactive thyroid, leading to symptoms such as fatigue, weight gain, dry skin, and depression. Hyperthyroidism, on the other hand, is caused by an overactive thyroid, leading to weight loss, anxiety, and rapid heart rate. These disorders can stem from genetic factors, autoimmune conditions, poor diet, stress, and environmental triggers.",
            "At Jivanti Ayurvedic Centre, the approach to treating thyroid disorders is rooted in balancing the body's doshas (Vata, Pitta, and Kapha) and addressing the underlying causes of the condition. The treatment protocol is holistic and individualized, involving detoxification therapies like Panchakarma to cleanse the body of toxins (Ama) that disrupt thyroid function. Herbal formulations, such as Kanchanar Guggulu and Ashwagandha, are commonly prescribed to regulate the thyroid gland and restore hormonal balance.",
            "In addition to herbal remedies, lifestyle modifications are emphasized. Dietary adjustments focus on foods that support thyroid function and digestion, while yoga and meditation are recommended to manage stress, a known trigger for thyroid imbalances. Jivanti Ayurvedic Centre's treatments aim to improve energy levels, regulate metabolism, and bring about long-term stability in thyroid function, promoting overall wellness without the need for invasive procedures or long-term medication dependency."
        ],
        'Psoriasis': [
            "Psoriasis is a chronic autoimmune condition that causes the rapid buildup of skin cells, resulting in scaling on the skin's surface. This buildup of skin cells creates patches of red, itchy, and sometimes painful skin.",
            "At Jivanti Ayurvedic Centre, treatment for Psoriasis involves addressing the root cause through a combination of Ayurvedic detoxification therapies, herbal remedies, and dietary modifications. The goal is to balance the body’s doshas and clear toxins (Ama) that contribute to Psoriasis.",
            "Herbs such as Neem, Turmeric, and Guggulu are used to reduce inflammation and purify the blood. In addition, Panchakarma therapy helps detoxify the body. Specific dietary recommendations focus on avoiding trigger foods while emphasizing cooling and detoxifying foods that promote skin health."
        ],
        'Inter-Vertebral Disc Prolapses': [
            "Inter-Vertebral Disc Prolapse, also known as a slipped disc, occurs when the soft cushion of tissue between the bones in your spine pushes out. This can cause pain, discomfort, and reduced mobility.",
            "At Jivanti Ayurvedic Centre, we offer a range of Ayurvedic treatments that focus on restoring balance, reducing inflammation, and relieving pressure on the affected disc. Therapies such as Kati Basti (a medicated oil treatment for the lower back) are often prescribed.",
            "In addition to external therapies, herbal formulations help reduce pain and inflammation. Yoga and lifestyle modifications are recommended to strengthen the spine and prevent further disc-related issues."
        ],
        'Joint Pain': [
            "Joint pain can arise from various conditions such as arthritis, injury, or overuse. It can affect mobility and quality of life, making even simple movements painful.",
            "Jivanti Ayurvedic Centre's approach to joint pain combines internal herbal medicines with external therapies like Abhyanga (oil massage) and Kati Basti (local oil therapy). These treatments help reduce inflammation, nourish the joints, and improve mobility.",
            "Along with therapies, Ayurvedic herbs like Shallaki and Ashwagandha are used to support joint health. Dietary and lifestyle adjustments are made to reduce inflammation and support overall joint health."
        ]
    };

    const renderContent = (content) => {
        if (Array.isArray(content)) {
            return content.map((paragraph, index) => (
                <p key={index} className="card-text">{paragraph}</p>
            ));
        }
        return <div className="card-text">{content}</div>;
    };

    return (
        <>
        <div className='program container t8'>
            <h2 className="reviews-title">
                <span className="text-red">Disease & Conditions</span> <span className="text-blue"> We Treat At Jivanti Ayurvedic, Delhi Clinic</span>
            </h2>
            <div className="gj1 mb-4">
                {diseases.map((disease) => (
                    <button
                        key={disease}
                        className={`btn123 me-2 ${
                            activeDisease === disease
                                ? 'btn-primary'
                                : 'btn-outline-secondary'
                        }`}
                        onClick={() => setActiveDisease(disease)}
                    >
                        {disease}
                    </button>
                ))}
            </div>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">
                        Jivanti Ayurvedic Centre's Holistic Approach to {activeDisease}
                    </h2>
                    {renderContent(info[activeDisease])}
                </div>
            </div>
        </div>
        <div className=" container fg" >
            <h2 className="reviews-title1">
                <span className="text-red">Our</span> <span className="text-blue">Services</span>
            </h2>
            <div className="con7">
                <div className="team-member">
                <img src={skin} alt="Kiran" />
                <p>Skin diseases</p>
                </div>
                <div className="team-member">
                <img src={kidney} alt="Rakhi" />
                <p>Kidney Stone</p>
                </div>
                <div className="team-member">
                <img src={liver} alt="Akash" />
                <p>Liver disease</p>
                </div>
                <div className="team-member">
                <img src={asthma} alt="Member 4" />
                <p>Asthma</p>
                </div>
                <div className="team-member">
                <img src={infertility} alt="Member 5" />
                <p>Infertility</p>
                </div>
                <div className="team-member">
                <img src={rhinitis} alt="Member 5" />
                <p>Rhinitis</p>
                </div>
                <div className="team-member">
                <img src={sinusitis} alt="Member 5" />
                <p>Sinusitis</p>
                </div>
                <div className="team-member">
                <img src={hairfall} alt="Member 5" />
                <p>Hairfall</p>
                </div>
            </div>
        </div>

        <div className='about7 container'>
            <div className="about7-left-content">
                <h4>Jivanti Ayurvedic Centre has successfully blended the <span> ancient wisdom of Ayurveda </span> 
                    with modern lifestyle modificationsoffer <span> holistic,non-invasive treatments </span> 
                     for various chronic conditions. Their integrative approach ensures
                    personalized care promotes <span> long-term health </span> 
                    and well-being without relying on surgical interventions.</h4>
            </div> 
            <div className="about7-right-content">
                <div className="img-container con1">
                <img src={user1} alt="" className='img1' id='image'/>
                <img src={user2} alt="" className='img2' id='image'/>
                <img src={user3} alt="" className='img3' id='image'/>
                <img src={user4} alt="" className='img4' id='image'/>
                <img src={user5} alt="" className='img4' id='image'/>
                <img src={user1} alt="" className='img1' id='image'/>
                <img src={user2} alt="" className='img2' id='image'/>
                <img src={user3} alt="" className='img3' id='image'/>
                <img src={user4} alt="" className='img4' id='image'/>
                <img src={user5} alt="" className='img4' id='image'/>
                <img src={user1} alt="" className='img1' id='image'/>
                <img src={user2} alt="" className='img2' id='image'/>
                <img src={user3} alt="" className='img3' id='image'/>
                <img src={user4} alt="" className='img4' id='image'/>
                <img src={user5} alt="" className='img4' id='image'/>
                </div>
            </div> 
        </div>
        </>
    );
};

export default Programs;
