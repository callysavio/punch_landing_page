import React from "react";
import styles from "../styles/Worked.module.css";
import groove from "../assets/images/groove.svg";
import wImage1 from "../assets/images/wImage1.svg";
import wImage2 from "../assets/images/wImage2.svg";
import jason from "../assets/images/Jason.svg";
import grooveLogo from "../assets/images/groove_logo.svg";
import quote from "../assets/images/quote.svg";

function HowItWorked() {
  return (
    <div id={styles.workedSection}>
      <img src={quote} id={styles.quote} alt="quote" />
      <div id={styles.worked}>
        <div className={styles.worked}>
          <div id={styles.wHeading}>
            How it worked <br />
            for Jason <img src={jason} alt="jason" id={styles.jason} />
            at
          </div>
          <img src={groove} alt="groove" className={styles.groove} />

          <p className={styles.wPara}>
            Zwilt enabled us to deliver on time and they’ve <br />
            been heavy hitters in our corner since.
          </p>

          <div id={styles.wImages}>
            <img src={wImage1} alt="wImage1" className={styles.wImage} />
            <img src={wImage2} alt="wImage2" className={styles.wImage} />
          </div>
        </div>
        <div className={`${styles.worked} ${styles.workedRight}`}>
          <div className={styles.wRight}>
            <img
              src={grooveLogo}
              alt="groove logo"
              className={styles.grooveLogo}
            />
            <div className={styles.jWords}>
              <p id={styles.jName}>Jason Makki</p>
              <p id={styles.jTitle}>Engineer at GROOVE</p>
              <small id={styles.jCountry}>San Francisco</small>
            </div>
          </div>

          <p id={styles.jPara}>
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorked;
