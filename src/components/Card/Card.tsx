import React from "react";
import type { CardProps } from "../../Type";
import styles from "../../pages/CardsPage.module.css";

const Card: React.FC<CardProps> = ({ title, text, image, onClick }) => (
  <div
    onClick={onClick}
    className={styles.card}
    style={{ cursor: onClick ? "pointer" : "default" }}
    role={onClick ? "button" : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={(e) => {
      if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
    }}
  >
    {image && <img src={image} alt={title} className={styles.cardImage} />}
    <div className={styles["card-content"]}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default Card;
