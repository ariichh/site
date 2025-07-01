import React from "react";
import styles from "../../assets/styles/HeroSection.module.css";

const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <h1>
        Найдите недвижимость своей мечты
      </h1>
      <h4>
        Квартиры, дома, коммерческие объекты — <br />
        всё в одном месте. Прозрачные сделки, опытные агенты.
      </h4>
      <button className={styles.buttonjoin}>Подобрать объект</button>
      <p>Ищете клиентов? Разместите свой объект</p>
    </div>
  </section>
);

export default HeroSection;
