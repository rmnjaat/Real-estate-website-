import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="padding innerWidth flexCenter f-container">
        {/*left  */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="scondaryText">
            Our Vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">bh-2 lpu Phagwara,Punjab</span>
          <div className="flexCenter f-menu">
           <div className="footer">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span >About Us</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
