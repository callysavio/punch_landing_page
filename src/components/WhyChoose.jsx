import React, { useState, useEffect } from "react";
import styles from "../styles/Why.module.css";
import whyIcon from "../assets/images/whyIcon.svg";
import learnIcon from "../assets/images/learnMoreIcon.svg";
import arianaImg from "../assets/images/arianaImg.svg";
import ariana from "../assets/images/ariana.svg";
import star from "../assets/images/star.svg";
import group from "../assets/images/group.svg";
import MessageBox from "./MessageBox";
import styles3 from "../styles/OpenBook.module.css";
import image1 from "../assets/images/msgImage1.svg";
import image2 from "../assets/images/msgImage2.svg";
import image3 from "../assets/images/msgImage3.svg";
import styles2 from "../styles/Why.module.css";

function WhyChoose() {
  const [visibleSection, setVisibleSection] = useState("onBoard");
  const [autoplay, setAutoplay] = useState(true); // State to control autoplay

  useEffect(() => {
    const sections = ["onBoard", "openBook", "loop"];
    let currentIndex = 0;
    let intervalId = null;

    if (autoplay) {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % sections.length;
        setVisibleSection(sections[currentIndex]);
      }, 4000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, [autoplay]);

  const nextSlide = () => {
    const sections = ["onBoard", "openBook", "loop"];
    const currentIndex = sections.indexOf(visibleSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setVisibleSection(sections[nextIndex]);
    setAutoplay(false); // Stop autoplay on manual slide change
  };

  const prevSlide = () => {
    const sections = ["onBoard", "openBook", "loop"];
    const currentIndex = sections.indexOf(visibleSection);
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    setVisibleSection(sections[prevIndex]);
    setAutoplay(false); // Stop autoplay on manual slide change
  };

  return (
    <div id={styles.mainContainer}>
      <div className={styles.child1}>
        <h2 className={styles.heading}>Why choose Zwilt?</h2>
        <p className={styles.para}>
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </div>
      {/* Navigation Icons */}
      <div id={styles.slideIcons}>
        <i
          className={`fa fa-angle-left ${styles.prev}`}
          onClick={prevSlide}
        ></i>
        <i
          className={`fa fa-angle-right ${styles.next}`}
          onClick={nextSlide}
        ></i>
      </div>
      <div
        className={`${styles.child2} ${styles.section} ${
          visibleSection === "onBoard" ? styles.visible : styles.hidden
        }`}
        id="onBoard"
      >
        <div className={styles.child}>
          <h1 className={styles.heading2}>Onboard without the risk.</h1>
          <ul className={styles.whyUl}>
            <li>
              <img alt="whyIcon" className={styles.whyIcon} src={whyIcon} />
              We pick the best for you to select.
            </li>
            <li>
              {" "}
              <img alt="whyIcon" className={styles.whyIcon} src={whyIcon} />
              Thousands of vetted candidates in dozens of categories.
            </li>
            <li>
              {" "}
              <img alt="whyIcon" className={styles.whyIcon} src={whyIcon} />
              Risk-free resource swapping for the best fit.
            </li>
          </ul>
          <div id={styles.learnMore}>
            <img alt="whyIcon" className={styles.learnIcon} src={learnIcon} />
            <p id={styles.learnMorePara}>Learn More</p>
          </div>
        </div>
        <div className={styles.child} id={styles.child}>
          <img src={star} alt="star" id={styles.star2} />
          <img src={arianaImg} alt="ariana" id={styles.arianaImg} />
          <div id={styles.arianaContainer}>
            <img alt="ariana" src={ariana} id={styles.arianaImg2} />
            <p id={styles.aName}>Ariana Marie</p>
            <div id={styles.arianaTexts}>
              <p className={styles.aText}>3d Modeling </p>
              <p className={styles.aText}>Character Rigging</p>
              <p className={styles.aText}>Environment Design</p>
            </div>
            <div id={styles.starHolder}>
              <div id={styles.star}>
                <span>5.0</span> <i className="fa fa-star"></i>
                <span>15</span>
              </div>
              <div id={styles.tInterview}>Take Interview</div>
            </div>
          </div>
        </div>
      </div>
      {/* second why -- child2 (open book) */}
      <div
        className={`${styles2.child2} ${styles.section} ${
          visibleSection === "openBook" ? styles.visible : styles.hidden
        }`}
        id="openBook"
      >
        <div className={`${styles3.child}`}>
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

        <div className={`${styles3.secondCard} ${styles2.child}`}>
          <img src={image1} alt="image1" className={styles3.image1} />
          <div>
            <div className={styles3.msgBox}>
              <MessageBox />
              <img src={image2} alt="" className={styles3.image3} />
            </div>
            <div className={styles3.lastCard}>
              <img src={image3} alt="" className={styles3.image2} />
              <div className={styles3.msgText}>
                <p>Hi Luis I am currently working as an expert at alfizo.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third why -- child2 (stay in the loop) */}
      <div
        className={`${styles.child2} ${styles.section} ${
          visibleSection === "loop" ? styles.visible : styles.hidden
        }`}
        id="loop"
      >
        <div className={`${styles.left} ${styles.child}`}>
          <h1 className={styles.heading2}>Stay in the loop.</h1>
          <ul className={styles.whyUl}>
            <li>
              <p className={styles.grn}></p>
              Track your staff activity down to every minute with screenshots.
            </li>
            <li>
              <p className={styles.grn}></p>
              Comprehensive timesheet data to process payments.
            </li>
            <li>
              <p className={styles.grn}></p>
              Create projects to organize and assign tasks more effectively.
            </li>
          </ul>
          <div id={styles.learnMore}>
            <img alt="whyIcon" className={styles.learnIcon} src={learnIcon} />
            <p id={styles.learnMorePara}>Learn More</p>
          </div>
        </div>
        <div className={`${styles.right} ${styles.child}`}>
          <div>
            <img src={group} alt="group" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
