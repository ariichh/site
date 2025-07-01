import React from "react";
import styles from "../../assets/styles/ConnectSection.module.css";

const ConnectSection: React.FC = () => (
  <section className={styles.connect}>
    <div className={styles.container}>
      <img
        src="img/Connect.jpg"
        alt="Связь с агентом"
        className={styles.connectImage}
      />
      <div className={styles.connectText}>
        <h1>Свяжитесь с нашим агентом</h1>
        <p>
          Получите персональную консультацию и доступ к актуальным предложениям недвижимости. Мы поможем подобрать оптимальный вариант — быстро и без стресса.
        </p>
      </div>
    </div>
  </section>
);

export default ConnectSection;
