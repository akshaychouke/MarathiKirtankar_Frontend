import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/kirtankars"}>kirtankars</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Kirtans</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              {/* <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li> */}
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="youtube">
                <a
                  href="https://www.youtube.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          {/* Made by{" "} */}
          <a
            href="https://www.linkedin.com/in/akshaychouke"
            target="_blank"
            rel="noreferrer"
          >
            Akshay Chouke
          </a>{" "}
          © {new Date().getFullYear()} | All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
