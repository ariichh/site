import React from "react";
import styles from "../../assets/styles/QuoteSection.module.css";

const QuoteSection: React.FC = () => (
  <section className={styles.quote}>
    <div className={styles.container}>
      <blockquote>
        <h1>
          Найти подходящую недвижимость — сложно.<br />
          Мы делаем это просто и удобно.
        </h1>
      </blockquote>
    </div>
  </section>
);

export default QuoteSection;
