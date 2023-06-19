import React from "react";
import { Game } from "../types";
import GameCard from "../GameCard/Index";

interface Props {
  err?: string;
  games: Game[];
}
const GameList = ({ err, games }: Props): JSX.Element => {
  if (err) {
    return <p>Unable to fetch data</p>;
  }
  if (games?.length === 0) {
    return <p>No games available</p>;
  }

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          <GameCard content={game} />
        </li>
      ))}
    </ul>
  );
};

export default GameList;
