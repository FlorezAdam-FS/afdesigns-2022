import React, { useState } from "react";
import styles from "../styles/Nav.module.scss";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const showServices = () => {
    setIsHovered((prev) => !prev);
  };

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
        <li className={styles.services}>
          <Link href="/services">
            <a onMouseEnter={showServices}>SERVICES</a>
          </Link>
          {isHovered && (
            <div className={styles.hiddenNav} onMouseLeave={showServices}>
              <Link href="/services/web_design">
                <a>WEB DESIGN</a>
              </Link>
              <Link href="/services/seo_services">
                <a>SEO SERVICES</a>
              </Link>
            </div>
          )}
        </li>
      </ul>

      <Link href="/">
        <a className={styles.logo}>af.</a>
      </Link>

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
