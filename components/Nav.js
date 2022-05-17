import React from "react";
import styles from "../styles/Nav.module.scss";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <Link href="/works">
            <a>WORKS</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className={styles.logo}>af.</a>
      </Link>

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

export default Nav;
