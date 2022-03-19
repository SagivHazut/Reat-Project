import React, { Fragment } from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import "./FooterComponent.css";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="..." />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="" />
        </a>
        <p>
          © 2022 Copyright: Sagiv Hazut <br />{" "}
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
