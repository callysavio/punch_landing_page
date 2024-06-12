import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import styles from "../styles/Header.module.css";

const Header = () => {
  // Set up the state for the menu visibility
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Create a toggle function
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <header id={styles.header}>
        <img src={logo} alt="logo" id={styles.logo} />
        {/* Conditionally render the menu */}
        <div id={styles.navBar} className={isMenuVisible ? styles.visible : ""}>
          <ul id={styles.ul1}>
            <li className={styles.li}>Find Work</li>
            <li className={styles.li}>Find Talent</li>
            <li className={styles.li}>Articles</li>
            <li className={styles.li}>About Us</li>
            <li className={styles.li}>Contact Us</li>
          </ul>
          <ul id={styles.ul2}>
            <li>
              <button className={styles.headerBtn}>Log In</button>
            </li>
            <li>
              <button className={`${styles.headerBtn} ${styles.joinBtn}`}>
                Join Now
              </button>
            </li>
          </ul>
        </div>
        {/* Hamburger and close icons */}
        <i
          className={`fa ${isMenuVisible ? "fa-times" : "fa-bars"}`}
          id={styles.menuBar}
          onClick={toggleMenu}
        ></i>
      </header>
    </div>
  );
};

export default Header;
