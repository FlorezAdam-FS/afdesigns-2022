import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import NextLink from "next/link";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <NextLink href="/projects">
            <a>Projects</a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/contact">
            <a>Contact</a>
          </NextLink>
        </li>
      </ul>

      <NextLink href="/">
        <a className={styles.logo}>af.</a>
      </NextLink>

      <div className={styles.social}>
        <a href="https://github.com/FlorezAdam-FS">
          <AiFillGithub className={styles.socialItem} />
        </a>
        <a href="https://www.linkedin.com/in/adamflorez/">
          <AiFillLinkedin className={styles.socialItem} />
        </a>
        <a href="https://instagram.com/adamflorezdesigns">
          <AiOutlineInstagram className={styles.socialItem} />
        </a>
        <a href="https://www.facebook.com/adamflorezdesigns">
          <FaFacebookF className={styles.socialItem} />
        </a>
      </div>
    </div>
  );
};

export default Nav;
