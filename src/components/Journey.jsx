import React from "react";
import styles from "../styles/Journey.module.css";
import one from "../assets/images/1.svg";
import two from "../assets/images/2.svg";
import three from "../assets/images/3.svg";
import learnIcon from "../assets/images/learnMoreIcon.svg";
import person1 from "../assets/images/jPerson1.svg";
import person2 from "../assets/images/jPerson2.svg";
import person3 from "../assets/images/jPerson3.svg";
import person4 from "../assets/images/jPerson4.svg";
import p2 from "../assets/images/p2.png";
import leelarImg from "../assets/images/leelarImg.svg";
import leelarLogo from "../assets/images/Leelar.svg";

const Journey = () => {
  return (
    <div id={styles.JourneySection}>
      <h2 id={styles.heading}>Start your journey today.</h2>
      <div id={styles.journeyHolder}>
        <div className={styles.journey}>
          <img className={styles.number} src={one} alt="number 1" />
          <div className={styles.words}>
            <h2 className={styles.heading2}>Find your next star performer.</h2>
            <p className={styles.jPara}>
              Assess the candidate through work history, transparent tests and
              video interviews.
            </p>

            <div id={styles.joinNow}>
              <img className={styles.joinIcon} src={learnIcon} alt="join now" />
              <p>Join Now</p>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.personContainer}>
              <img alt="person 1" src={person1} className={styles.person1} />
              <div className={styles.pTexts}>
                <p className={styles.title}>Ruby Developer</p>
                <p className={styles.description}>
                  Redwood City, California 7 years experience{" "}
                </p>
              </div>
            </div>
            <div
              className={`${styles.personContainer} ${styles.personContainer2}`}
            >
              <img alt="person 1" src={person2} className={styles.person2} />
              <div className={styles.pTexts}>
                <p className={styles.title}>System ops engineer</p>
                <p className={styles.description}>
                  Abu Dhabi, UAE 5 years experience
                </p>
              </div>
            </div>
            <div id={styles.persons34}>
              <img className={styles.person3} alt="alt 3" src={person3} />
              <img className={styles.person4} alt="alt 3" src={person4} />
            </div>
          </div>
        </div>

        {/* journey two */}
        <div className={`${styles.journey} ${styles.journey2}`}>
          <img className={styles.number} src={two} alt="number 2" />
          <div className={styles.words}>
            <h2 className={styles.heading2}>
              Evaluate to your heart’s content.
            </h2>
            <p className={styles.jPara}>
              Assess the candidate through work history, transparent tests and
              video interviews.
            </p>

            <div id={styles.joinNow}>
              <img className={styles.joinIcon} src={learnIcon} alt="join now" />
              <p>Browse More</p>
            </div>
          </div>
          <div className={styles.images} id={styles.images2}>
            <div className={styles.personContainer3}>
              <div id={styles.pTop}>
                <img alt="person 1" src={person2} className={styles.p1} />
                <div id={styles.line1}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                </div>
              </div>
              <div id={styles.pBottom}>
                {/* line 1 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>
                {/* line 2 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>

                {/* line 3 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.personContainer3} ${styles.personContainer4}`}
            >
              <div id={styles.pTop}>
                <img alt="person 1" src={p2} className={styles.p1} />
                <div id={styles.line1}>
                  <div className={styles.line11}></div>
                  <div className={styles.line22}></div>
                </div>
              </div>
              <div id={styles.pBottom}>
                {/* line 1 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>
                {/* line 2 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>

                {/* line 3 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.personContainer3} ${styles.personContainer5}`}
            >
              <div id={styles.pTop}>
                <img alt="person 1" src={person3} className={styles.p5} />
                <div id={styles.line1}>
                  <div className={styles.line111}></div>
                  <div className={styles.line222}></div>
                </div>
              </div>
              <div id={styles.pBottom}>
                {/* line 1 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>
                {/* line 2 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>

                {/* line 3 */}
                <div className={styles.pBottom1}>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* journey three */}
        <div className={styles.journey}>
          <img className={styles.number} src={three} alt="number 3" />
          <div className={styles.words}>
            <h2 className={styles.heading2}>Start building your team.</h2>
            <p className={styles.jPara}>
              Onboard your candidate right away and start creating the next big
              thing.
            </p>

            <div id={styles.joinNow}>
              <img className={styles.joinIcon} src={learnIcon} alt="join now" />
              <p>Join Now</p>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.personContainer6}>
              <div id={styles.bPerson}>
                <img alt="person 3" src={p2} className={styles.p3} />
                <p className={`${styles.title} ${styles.aPaker}`}>
                  Alison <br />
                  Parker
                </p>
              </div>
              <div className={styles.pTexts}>
                <p className={styles.title}>Ruby Developer</p>
                <p className={styles.description}>
                  Redwood City, California 7 years experience
                </p>
                <p id={styles.leelar}>
                  <b>LEELAR</b>
                </p>
              </div>
            </div>
            <div className={styles.leelarBg}>
              <img alt="leelar" src={leelarImg} className={styles.leelarImg} />
              <img
                alt="leelar logo"
                src={leelarLogo}
                className={styles.leelarLogo}
              />
            </div>
            <div id={styles.x10}>
              <h1>10X</h1>
              <p>Start building your team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
