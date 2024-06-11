import React from "react";
import logo from "../assets/images/logo.svg";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <header id={`${styles.header}`}>
        <img src={logo} alt="logo" id={`${styles.logo}`} />
        <ul id={`${styles.ul}`}>
          <li className={`${styles.li}`}>Finder Work</li>
          <li className={`${styles.li}`}>Find Talent</li>
          <li className={`${styles.li}`}>Articles</li>
          <li className={`${styles.li}`}>About Us</li>
          <li className={`${styles.li}`}>Contact Us</li>
        </ul>

        <ul id={`${styles.headerBtns}`}>
          <li>
            <button className={`${styles.headerBtn}`}>Log In</button>
          </li>
          <li>
            <button className={`${styles.headerBtn} ${styles.joinBtn}`}>
              Join Now
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
