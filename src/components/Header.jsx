import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img src={logo} alt="logo" id={styles.logo} />
        </Link>
        {/* Conditionally render the menu */}
        <div id={styles.navBar} className={isMenuVisible ? styles.visible : ""}>
          <ul id={styles.ul1}>
            <li className={styles.li}>
              <Link to="/find-work" onClick={toggleMenu}>
                Find Work
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/find-talent" onClick={toggleMenu}>
                Find Talent
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/articles" onClick={toggleMenu}>
                Articles
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className={styles.li}>
              <Link to="/contact-us" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul id={styles.ul2}>
            <li>
              <button className={styles.headerBtn}>
                <Link to="/log-in" onClick={toggleMenu}>
                  Log In
                </Link>
              </button>
            </li>
            <li>
              <button className={`${styles.headerBtn} ${styles.joinBtn}`}>
                <Link to="/sign-up" onClick={toggleMenu}>
                  <p className={styles.jNow}>Join Now</p>
                </Link>
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
