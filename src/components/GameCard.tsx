import React from "react";
import { Game } from "./hooks/useGames";
import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
