import React from "react";
import styles from "../../assets/styles/InfoSection.module.css";
import CardList from "../CardList/CardList"; 

const InfoSection = () => {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h1>Категории недвижимости для любого запроса</h1>
        <img
          id="infoImage"
          src="img/INFO3.jpg"
          alt="Разные типы объектов недвижимости"
          className={styles.infoImage}
        />
        <CardList />
      </div>
    </section>
  );
};

export default InfoSection;
