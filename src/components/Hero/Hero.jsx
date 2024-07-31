import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi ,I'm Shivanshu</h1>
        <p className={styles.description}>
          I'm a Frontend Developer using Html,Css,JavaScript,React.js and programming language
          Java and for Database Sql.
        </p>
        <a href="./assets/REsume/Shivanshu Gupta Resume.pdf" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img src={getImageUrl("hero/hero.png")} className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
