import React from "react";
import Card from "../Card/Card";
import type { CardData } from "../../Type";
import styles from "../../pages/CardsPage.module.css";

interface CardListProps {
  limit?: number;
  containerClassName?: string;
  showImages?: boolean;
  onCardClick?: (id: number) => void;
}

const propertyData: CardData[] = [
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
  },
];

const CardList: React.FC<CardListProps> = ({
  limit = 10,
  containerClassName,
  showImages = true,
  onCardClick,
}) => {
  const extendedCards = Array(limit)
    .fill(null)
    .map((_, i) => {
      const base = propertyData[i % propertyData.length];
      const card = showImages ? base : { ...base, image: null };
      return { ...card, id: i + 1 };
    });

  return (
    <div
      className={containerClassName ? containerClassName : styles.cardsGrid}
      id="features-container"
    >
      {extendedCards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          image={card.image}
          onClick={() => onCardClick && onCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
