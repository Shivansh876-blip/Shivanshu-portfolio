import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Innovative and detail-oriented Fresher Front End Developer with
                a passion for creating responsive and user-friendly websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} />
            <div className={styles.aboutItemText}>
              <h3>Manual Tester</h3>
              <p>
                I'm a Manual tester with knowledge of all teting methodologies
                and knowledge about SDLC,STLC and Bug life cycle etc..
              </p>
            </div>
          </li>
        
        </ul>
      </div>
    </section>
  );
};
