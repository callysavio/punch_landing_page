import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStep } from "../redux/actions/stepsActions";
import styles from "../styles/Recruitment.module.css";
import stepIcon from "../assets/images/stepIcon.svg";

const RecruitmentSteps = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.steps.steps);

  const handleStepClick = (id) => {
    dispatch(toggleStep(id));
  };

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
        {steps.map((step) => (
          <div key={step.id} className={styles.steps}>
            <div
              className={`${styles.step} ${step.active ? styles.active : ""}`}
              onClick={() => handleStepClick(step.id)}
            >
              <img
                src={stepIcon}
                alt="step icon"
                className={`${styles.stepIcon} ${
                  step.active ? styles.activeIcon : ""
                }`}
              />
              <p className={styles.sPara}>
                <b>{step.title}</b>
              </p>
            </div>
            {step.active && <p className={styles.sPara2}>{step.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitmentSteps;
