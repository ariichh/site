import React from "react";
import styles from "../../assets/styles/CtaSection.module.css";

const CtaSection: React.FC = () => (
  <section className={styles.cta}>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Оставьте заявку<br />на подбор недвижимости</h1>
        <button className={styles.ctaButton}>Оставить заявку</button>
      </div>
      <img
        src="img/Job.jpg"
        alt="Иллюстрация недвижимости"
        className={styles.ctaImage}
      />
    </div>
  </section>
);

export default CtaSection;
