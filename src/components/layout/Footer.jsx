import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>B.Tech Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em className="feedback">We give attention to genuine feedback.</em>

        <strong className="right">All right received @bTechburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <div className="socials">
        <a href="https://youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
        </div>

        
      </aside>
    </footer>
  );
};

export default Footer;