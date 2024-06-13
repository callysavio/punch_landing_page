import React from "react";
import styles from "../styles/footer.module.css";

const footerLinks = [
  {
    name: "platform",
    links: [
      { title: "Find Work", href: "/" },
      { title: "Find talent", href: "/" },
      { title: "Categories", href: "/" },
      { title: "About Us", href: "/" },
    ],
  },
  {
    name: "categories",
    links: [
      { title: "Data Science", href: "/" },
      { title: "IT & Networking", href: "/" },
      { title: "Web & Mobile", href: "/" },
    ],
  },
  {
    name: "help",
    links: [
      { title: "FAQ's", href: "/" },
      { title: "Contact Us", href: "/" },
    ],
  },
  {
    name: "get i touch @",
    links: [
      { title: "Instagram", href: "/" },
      { title: "LinkedIn", href: "/" },
      { title: "Twitter", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTopCrop} />
      <div className={styles.footerTop} />
      <div className={styles.container}>
        <div className={styles.footerHead}>
          <div className={styles.footerHeadResolve}>
            <div className={styles.footerHeadInfo}>
              <h4>Need a job done, and done well? Get started</h4>
              <img
                src="/footer/svgs/footer-head-svg.svg"
                alt="footer head svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.footerMain}>
          <div className={styles.footerMainLeft}>
            <div className={styles.footerMainLeftLogo}>
              <img src="/footer/svgs/zwilt.svg" alt="zwilt svg logo" />
              <img
                src="/footer/svgs/zwilt-vector.svg"
                alt="zwilt vector logo"
              />
            </div>
            <p className={styles.footerMainLeftText}>
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
            <div className={styles.linksAndRedirects}>
              <span>LINKS AND REDIRECTS</span>
              <div className={styles.linksAndRedirectsButtons}>
                <button>Hire now</button>
                <button>Apply now</button>
              </div>
            </div>
          </div>
          <div className={styles.footerMainRight}>
            <h4>Connecting the right people to the right businesses.</h4>
            <div className={styles.links}>
              {footerLinks.map((link, index) => (
                <div key={index}>
                  <h6 className={styles.linksName}>
                    {link.name.toUpperCase()}
                  </h6>
                  <ul>
                    {link.links.map((subLink, index) => (
                      <li key={index}>
                        <a href={subLink.href}>{subLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerFoot}>
        <div className={styles.container}>
          <div className={styles.footerFootItems}>
            <span>All rights reserved by Zwilt</span>
            <div className={styles.footerFootLinks}>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
