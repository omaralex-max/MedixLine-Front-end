import React from "react";
import "./footer.css";
import Logo from "../../assets/icons/house-solid.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="" className="logo footerLogo" />
            <p className="footerDescription">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple consultation.
            </p>
            <div className="media d-flex " style={{ gap: '20px' }}>
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
          <div className="col footerLinks">
            <h3>MedixLine</h3>
            <div className="links ">
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Team</a>
              <a href="#">Project</a>
              <a href="#">Blog</a>
              <Link to="/signin">Login</Link>       
            </div>
          </div>
          <div className="col departmentFooter">
            <h3>Departments</h3>
            <div className="links ">
              <a href="#">Eye Care</a>
              <a href="#">Dentistry</a>
              <a href="#">Cardiology</a>
              <a href="#">Pediatrics</a>
              <a href="#">Gynecology</a>
              <a href="#">Pulmonology</a>
              <a href="#">Neurology</a>
              <a href="#">Gastroenterology</a>
            </div>
          </div>
          <div className="col contactFooter">
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
