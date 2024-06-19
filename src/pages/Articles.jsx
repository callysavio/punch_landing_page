import React from "react";
import Header from "../components/Header";
import Footer from "./../components/footer";
import styles from "../styles/HeroSection.module.css";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div>
      <Header />
      <div className={styles.pagesHeader}>
        <h1 id={styles.heroHeading}>Welcome to our Articles Page</h1>
        <p className={styles.linkPara}>
          <Link to="/" className={styles.link}>
            <i class={`fa fa-long-arrow-left ${styles["fa-arrow-left"]}`}></i>{" "}
            Back to landing page
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
