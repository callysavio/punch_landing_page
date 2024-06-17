import React from "react";
import styles from "../styles/HeroSection.module.css";
import heroicon from "../assets/images/hero.svg";

const HeroSection = () => {
  return (
    <div>
      <div id={`${styles.heroHeading}`}>
        Finding the right fit
        <img
          id={`${styles.heroIcon}`}
          src="https://s3-alpha-sig.figma.com/img/77ea/e46e/4921166cf2646c0f6f42c6cf4855a5ea?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=letDW-HpVLmzTxWncnTX6dDVPxxge1W7~YNtoGwkIIp-2d~1vqnd0TaH~aYccroZN60WAlr8tGOHL5fT~yeGoh25Euriv-QM26LjdVR6DDJGfTmHiXLbPdSd7oGgnJ6Ck6DdNKvfghxsBSqeiN0aEwG5hOOowL8Wf7trBm33xbYPkDV31d53Czi4nW~UePc95otLtqs2zNDLJyiUSyccKdT4pN6wHWE8gUzAGJXVsDVklg1wB-LgvFJyq2qCA0c3VhwA4bin6TsEWk7nQzzwTzJqZfKzHqBlq5LfRsNwaq2SnsX683J0-YlQaGr8nbQbv64vYjic2TNTRiwIyB1LEw__"
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
          type="text"
          placeholder="Looking for design |"
        />
        <img id={`${styles.heroSearchIcon}`} alt="searchicon" src={heroicon} />
      </div>
    </div>
  );
};

export default HeroSection;
