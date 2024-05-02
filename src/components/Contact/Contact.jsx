import React from "react";
import "./Contact.css";
import {MdCall} from 'react-icons/md'
import{BsFillChatDotsFill} from 'react-icons/bs'
import{HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter1 c-container">
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. we
            believe a good blace to live can make your life better.{" "}
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                  <span >Call</span>
                   <span>+91 808382744</span>
          
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode chat mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                  <span >chat</span>
                   <span>+91 808382744</span>
          
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                  <span >Video Call</span>
                   <span>+91 808382744</span>
          
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* fouth mode chat mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25}/>
                  </div>
                  <div className="flexColStart detail">
                  <span >Message</span>
                   <span>+91 808382744</span>
          
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
             
            
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="img of contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
