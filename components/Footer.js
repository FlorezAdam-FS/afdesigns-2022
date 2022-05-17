import React from "react";
import styles from "../styles/Footer.module.scss";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <a href="https://github.com/FlorezAdam-FS">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/adamflorez/">
          <AiFillLinkedin />
        </a>
        <a href="https://instagram.com/adamflorezdesigns">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.facebook.com/adam.florez.754">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default Footer;
