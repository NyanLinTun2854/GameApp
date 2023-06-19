import React, { useEffect, useState } from "react";
import axios from "axios";
import GameListRender from "./GameList.render";
import { Game } from "../types";
import { host, key } from "./Constants";

const GameList = (): JSX.Element => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    axios
      .get("/games", {
        baseURL: `https://${host}/api`,
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
        params: {
          platform: "pc",
        },
      })
      .then((res) => setGames(res.data))
      .catch((err) => setErr(err));
  }, []);
  console.log(games);
  console.log(err);

  return <GameListRender err={err} games={games} />;
};

export default GameList;
