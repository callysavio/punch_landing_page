import React from "react";
import styles from "../styles/HeroSection.module.css";
import searchIcon from "../assets/images/search.svg";

const HeroSection = () => {
  return (
    <div>
      <div id={`${styles.heroHeading}`}>
        Finding the right fit
        <img
          id={`${styles.heroIcon}`}
          src="https://s3-alpha-sig.figma.com/img/77ea/e46e/4921166cf2646c0f6f42c6cf4855a5ea?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VQ7VkPEEUxuVcL92P4UX0qcv7PZVjpY8FtvTB6wBMltLDzmOdRegfRvDT9qeUyFRsIn7cbjzaq2i0tse6f4RAQNOAMXsFUjU~ZtMrsHSHPesHP7IuWnCxpTskvub9-zdkz1VHzTa6Iyvvq54K3-CqVJdylBHMEJ2Kyx--VniitefF8viL7Wy0qiHPzQ-Uiu89vmBO3YgI6050R6ZRA33Z9G3VyWN1V2LnyZzPD17wAQJ0Lnxje27cQoQOS45TcMMCIL3wdBycw1lecH-j2v04zrEjOAPcyzh27cOIo7rXnm744lBdY9CHrynQOwdy4z4Dex1CCMQKMS07SOcTHvbuA__"
          alt="heroimage"
        />
        has never been easier.
      </div>

      <p className={`${styles.heroPara}`}>
        With our rigorous pre-vetting process, you'll never have to worry about
        finding the ideal candidate ever again.
      </p>
      <div id={`${styles.heroSearchHolder}`}>
        <input
          id={`${styles.heroSearchBar}`}
          tpe="text"
          placeholder="Looking for design |"
        />
        <img
          id={`${styles.heroSearchIcon}`}
          alt="search icon"
          src={searchIcon}
        />
      </div>
    </div>
  );
};

export default HeroSection;
