import React from "react";
import styles from "../styles/Faq.module.css";
import faqIcon from "../assets/images/faqIcon.svg";

const FAQSection = () => {
  return (
    <section id={styles.main} className={styles.main}>
      <div className={styles.body}>
        <div className={styles.header}>
          <h1>Frequently asked questions</h1>
        </div>

        <div className={styles.questions}>
          <div className={styles.firstQuestion} id={styles.single1}>
            <div>
              <h5 className={styles.boldText}>General</h5>
            </div>
            <div>
              <h5 className={styles.font}>
                I want to work part-time, is that possible
              </h5>
            </div>
          </div>
          <div id={styles.single2} className={styles.faqs}>
            <h5 className={styles.font}>How long are the average projects?</h5>
          </div>
          <div className={styles.bold} id={styles.single3}>
            <div></div>
            <div id={styles.pProcess}>
              <h5 className={styles.boldText}>How does the payment work?</h5>
            </div>
            <div>
              <img src={faqIcon} alt="Payment Process" id={styles.pIcon} />
            </div>
          </div>
          <div id={styles.single4} className={styles.faqs}>
            <h5 className={styles.font}>How much can I earn?</h5>
          </div>
          <div className={styles.three} id={styles.single5}>
            <div id={styles.bg}>
              <h5 className={styles.boldText}>General</h5>
            </div>
            <div>
              <h5 className={styles.boldText}>Joining Process</h5>
            </div>
            <div>
              <h5 className={styles.font} style={{ textAlign: "left" }}>
                I want to work part-time, is that possible
              </h5>
            </div>
          </div>
          <div id={styles.single6} className={styles.faqs}>
            <h5 className={styles.font}>How long are the average projects?</h5>
          </div>
          <div id={styles.single7} className={styles.faqs}>
            <h5 className={styles.font}>How long are the average projects?</h5>
          </div>
          <div id={styles.single8} className={styles.faqs}>
            <h5 className={styles.font}>How much can I earn?</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
