import React from "react";
import styles from "../styles/Talents.module.css";
import iconOne from "../assets/images/find_icon1.svg";
import iconTwo from "../assets/images/find_icon2.svg";
import iconThree from "../assets/images/find_icon3.svg";
import exploreIcon from "../assets/images/explore_more.svg";
import exploreIcon2 from "../assets/images/explore_more2.svg";
import exploreIcon3 from "../assets/images/explore_more3.svg";
import itIcon1 from "../assets/images/itIcon1.svg";
import itIcon2 from "../assets/images/itIcon2.svg";
import itIcon3 from "../assets/images/itIcon3.svg";
import itIcon4 from "../assets/images/itIcon4.svg";
import itIcon5 from "../assets/images/itIcon5.svg";
import dIcon1 from "../assets/images/dIcon1.svg";
import dIcon2 from "../assets/images/dIcon2.svg";
import dIcon3 from "../assets/images/dIcon3.svg";
import dIcon4 from "../assets/images/dIcon4.svg";
import dIcon5 from "../assets/images/dIcon5.svg";

const Talents = () => {
  return (
    <div id={styles.talentsSection}>
      <p id={styles.talentsHeading}>
        Your one-stop marketplace for finding the talent your business needs.
      </p>
      <div id={styles.talentsContainer}>
        <div className={styles.talentsContainer1}>
          <div className={styles.talentsLeft}>
            <p className={styles.talentsPara}>
              Find Dev and IT professionals to scale your business.
            </p>
            <ul className={styles.talentsUl}>
              <li>
                <img src={iconOne} alt="icon" className={styles.talentsIcon} />
                989 Skills
              </li>
              <li>
                <img src={iconTwo} alt="icon" className={styles.talentsIcon} />
                45 Sub-Categories
              </li>
              <li>
                <img
                  src={iconThree}
                  alt="icon"
                  className={styles.talentsIcon}
                />
                1011 Profiles
              </li>
            </ul>
          </div>

          {/* right */}
          <div className={styles.talentsRight}>
            <p className={styles.tHeading}>IT & Development</p>
            <div id={styles.talents}>
              {/* IT & Development Skills */}
              <div className={styles.talent}>
                <img src={itIcon1} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Shopify Developer</p>
              </div>
              <div className={styles.talent}>
                <img src={itIcon2} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Magento Developer</p>
              </div>
              <div className={styles.talent}>
                <img src={itIcon3} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Data Scientist</p>
              </div>
              <div className={styles.talent}>
                <img src={itIcon4} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Webflow Developer</p>
              </div>
              <div className={styles.talent}>
                <img src={itIcon5} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Dot Net Developer</p>
              </div>
              <div className={styles.talent}>
                <img
                  src={exploreIcon}
                  className={`${styles.talentImg} ${styles.talentImg2}`}
                  alt="itIcon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.talentsContainer2}>
          <div className={styles.talentsLeft}>
            <p className={styles.talentsPara}>
              Explore Creative individuals with a keen eye for detail.
            </p>
            <ul className={styles.talentsUl}>
              <li>
                <img src={iconOne} alt="icon" className={styles.talentsIcon} />
                989 Skills
              </li>
              <li>
                <img src={iconTwo} alt="icon" className={styles.talentsIcon} />
                45 Sub-Categories
              </li>
              <li>
                <img
                  src={iconThree}
                  alt="icon"
                  className={styles.talentsIcon}
                />
                1011 Profiles
              </li>
            </ul>
          </div>
          {/* design skills/talents */}

          <div className={styles.talentsRight}>
            <p className={styles.tHeading}>Design & Creatives</p>
            <div id={styles.talents}>
              <div className={styles.talent}>
                <img
                  src={exploreIcon2}
                  className={`${styles.talentImg} ${styles.talentImg2}`}
                  alt="itIcon"
                />
              </div>
              <div className={styles.talent}>
                <img src={dIcon1} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>UX Designer</p>
              </div>
              <div className={styles.talent}>
                <img src={dIcon2} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Graphics Designer</p>
              </div>
              <div className={styles.talent}>
                <img src={dIcon3} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Illustration Artist</p>
              </div>
              <div className={styles.talent}>
                <img src={dIcon4} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Unreal Engine</p>
              </div>
              <div className={styles.talent}>
                <img src={dIcon5} className={styles.talentImg} alt="itIcon" />
                <p className={styles.tTitle}>Cinema 4D</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.talentsContainer3}>
          <div className={styles.exploreHolder}>
            <img
              src={exploreIcon3}
              alt="explore_more"
              className={styles.exploreIcon}
            />
            <p className={styles.exploreMore}>Explore More</p>
          </div>
          <div>
            <p className={styles.thirtyMore}>
              <b>30 more</b> to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talents;
