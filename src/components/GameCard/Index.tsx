import React from "react";
import { Game } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): JSX.Element => {
  const navigation = useNavigate();
  const { id, title, thumbnail, short_description, genre } = content;

  const navigateToDetail = () => {
    navigation(`/games/${id}`);
  };
  return (
    <div onClick={navigateToDetail}>
      <img src={thumbnail} alt="" />
      <h2>{title}</h2>
      <p>{short_description}</p>
      <p>{genre}</p>
    </div>
  );
};

export default GameCard;
