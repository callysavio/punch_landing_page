import React from "react";
import styles from "../styles/Why.module.css";
import whyIcon from "../assets/images/whyIcon.svg";
import learnIcon from "../assets/images/learnMoreIcon.svg";
import arianaImg from "../assets/images/arianaImg.svg";
import ariana from "../assets/images/ariana.svg";
import star from "../assets/images/star.svg";
// import style from "../styles/card.module.css";
// import arr from "../assets/images/arr.svg";
// import group from "../assets/images/group.svg";

function WhyChoose() {
  return (
    <div id={styles.mainContainer}>
      <div className={styles.child1}>
        <h2 className={styles.heading}>Why choose Zwilt?</h2>
        <p className={styles.para}>
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </div>
      <div className={styles.child2}>
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
                <span>5.0</span> <i class="fa fa-star"></i>
                <span>15</span>
              </div>
              <div id={styles.tInterview}>Take Interview</div>
            </div>
          </div>
              </div>
              
              
      </div>
      
    </div>
  );
}

export default WhyChoose;
