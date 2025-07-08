import React, { useState } from "react";
import CardList from "../components/CardList/CardList";
import styles from "./CardsPage.module.css";

const propertyData = [
  {
    id: 1,
    title: "Квартиры и комнаты",
    text: "Готовые квартиры и уютные комнаты в любом районе города.",
    image: "/img/O.jpg",
  },
  {
    id: 2,
    title: "Новостройки",
    text: "Современные жилые комплексы от ведущих застройщиков.",
    image: "/img/Y.jpg",
  },
  {
    id: 3,
    title: "Коттеджи",
    text: "Загородные дома для комфортной жизни с участком.",
    image: "/img/L.jpg",
  }
];

const CardsPage: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  // Получаем объект карточки по выбранному id
  const selectedCard = selectedCardId
    ? propertyData[(selectedCardId - 1) % propertyData.length]
    : null;

  return (
    <div className={styles.container}>


      {selectedCard && (
        <div className={styles.selectedImageContainer}>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className={styles.selectedImage}
          />
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.text}</p>
        </div>
      )}

      <CardList
        limit={10}
        containerClassName={styles.cardsGrid}
        showImages={false}
        onCardClick={setSelectedCardId}
      />
    </div>
  );
};

export default CardsPage;
