import React from "react";
import styles from "../styles/OpenBook.module.css";
import MessageBox from "./MessageBox";
import image1 from "../assets/images/msgImage1.svg";
import image2 from "../assets/images/msgImage2.svg";
import image3 from "../assets/images/msgImage3.svg";
import styles2 from "../styles/Why.module.css";
import learnIcon from "../assets/images/learnMoreIcon.svg";
const OpenBook = () => {
  return (
    <div className={styles2.child2} id={styles2.openBook}>
      <div className={`${styles.child}`}>
        <h1 className={styles2.heading2}>
          An open <br /> book.
        </h1>
        <ul className={styles2.whyUl}>
          <li>
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="7" rx="3.5" fill="#FFBE2E" />
            </svg>

            <p>Easy and transparent one-to-one chat with candidates.</p>
          </li>
          <li>
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="7" rx="3.5" fill="#FFBE2E" />
            </svg>
            Simple and convenient payment methods.
          </li>
          <li>
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="7" rx="3.5" fill="#FFBE2E" />
            </svg>
            Review past ratings.
          </li>
        </ul>
        <div id={styles2.learnMore}>
          <img alt="whyIcon" className={styles2.learnIcon} src={learnIcon} />
          <p id={styles2.learnMorePara}>Learn More</p>
        </div>
      </div>

      <div className={`${styles.secondCard} ${styles2.child}`}>
        <img src={image1} alt="image1" className={styles.image1} />
        <div>
          <div className={styles.msgBox}>
            <MessageBox />
            <img src={image2} alt="" className={styles.image3} />
          </div>
          <div className={styles.lastCard}>
            <img src={image3} alt="" className={styles.image2} />
            <div className={styles.msgText}>
              <p>Hi Luis I am currently working as an expert at alfizo.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenBook;
