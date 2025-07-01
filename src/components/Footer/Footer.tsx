import React from "react";
import styles from "../../assets/styles/Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.foot_all}>
      <div className={styles.footer__right}>
        <p className={styles.footer__text}>Агенство недвижимости</p>
        <p className={styles.footer__text}>Выбери недвижимость своей мечты</p>
        <p className={styles.footer__text}>©2025</p>
      </div>
    </div>
  </footer>
);

export default Footer;
