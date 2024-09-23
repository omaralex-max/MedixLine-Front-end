import React from "react";
import "./footer.css";
import Logo from "../../static/icons/house-solid.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="" className="logo" />
            <p>
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple consultation.
            </p>
            <div className="media">
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="col">
            <h3>Company</h3>
            <div className="links">
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Team</a>
              <a href="#">Project</a>
              <a href="#">Blog</a>
              <a href="#">Login</a>
            </div>
          </div>
          <div className="col">
            <h3>Departments</h3>
            <div className="links">
              <a href="#">Eye Care</a>
              <a href="#">Psychotherapy</a>
              <a href="#">Dental Care</a>
              <a href="#">Orthopedic</a>
              <a href="#">Cardiology</a>
              <a href="#">Gynecology</a>
              <a href="#">Neurology</a>
            </div>
          </div>
          <div className="col">
            <h3>Contact</h3>
            <div className="contact-details">
              <i className="fa fa-location" />
              <p>View on Google map</p>
            </div>
            <br />
            <div className="contact-details">
              <i className="fa fa-phone" />
              <p>+152 534-468-854</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
