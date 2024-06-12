import React from "react";
import styles from "../styles/Recruitment.module.css";
import stepIcon from "../assets/images/stepIcon.svg";

const RecruitmentSteps = () => {
  return (
    <div id={styles.mainSection}>
      <h1 id={styles.heading}>
        How we ensure you’re <br />
        in good hands.
      </h1>
      <p id={styles.paragraph}>
        With our comprehensive screening process, we hand-pick highly <br />
        skilled candidates so you can onboard them in a matter of days.
      </p>

      <div id={styles.steps}>
        <div className={styles.steps}>
          <div className={styles.step}>
            <img src={stepIcon} alt="step icon" className={styles.stepIcon} />
            <p className={styles.sPara}>
              <b>Step 1:</b> Resume Screening
            </p>
          </div>
          <p className={styles.sPara2}>
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to gauge personality and cultural fit.{" "}
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <img src={stepIcon} alt="step icon" className={styles.stepIcon} />
            <p className={styles.sPara}>
              <b>Step 2:</b>Video Inteview
            </p>
          </div>
          <p className={styles.sPara2}>
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to gauge personality and cultural fit.{" "}
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <img src={stepIcon} alt="step icon" className={styles.stepIcon} />
            <p className={styles.sPara}>
              <b>Step 3:</b> Technical Evaluation
            </p>
          </div>
          <p className={styles.sPara2}>
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to gauge personality and cultural fit.{" "}
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <img src={stepIcon} alt="step icon" className={styles.stepIcon} />
            <p className={styles.sPara}>
              <b>Step 4:</b> Application Review
            </p>
          </div>
          <p className={styles.sPara2}>
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to gauge personality and cultural fit.{" "}
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <img src={stepIcon} alt="step icon" className={styles.stepIcon} />
            <p className={styles.sPara}>
              <b>Step 5:</b> Let's get to work
            </p>
          </div>
          <p className={styles.sPara2}>
            Candidates are assessed through skill based questions in a virtual
            setting. Allowing you to gauge personality and cultural fit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentSteps;
