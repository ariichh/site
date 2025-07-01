import React from "react";
import Card from "../Card/Card";
import type { CardData } from '../../Type';
import defaultStyles from "../../assets/styles/InfoSection.module.css";

interface CardListProps {
  limit?: number;
  containerClassName?: string;
}

const propertyData: CardData[] = [
  {
    id: 1,
    title: "Квартиры и комнаты",
    text: "Готовые квартиры и уютные комнаты в любом районе города.",
    image: null,
  },
  {
    id: 2,
    title: "Новостройки",
    text: "Современные жилые комплексы от ведущих застройщиков.",
    image: null,
  },
  {
    id: 3,
    title: "Коттеджи",
    text: "Загородные дома для комфортной жизни с участком.",
    image: null,
  }
];

const CardList: React.FC<CardListProps> = ({ limit = 10, containerClassName }) => {
  const cardsToShow = propertyData.slice(0, limit);

  return (
    <div className={containerClassName ? containerClassName : defaultStyles.features} id="features-container">
      {cardsToShow.map(card => (
        <div key={card.id} className={defaultStyles.feature}>
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            onClick={() => console.log(card.title)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
