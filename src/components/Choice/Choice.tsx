import { useState } from "react";
import { Battle } from "..";
import { useScore } from "../../context/ScoreContext";
import Button from "./Button/Button";
import * as S from "./Choice.style";

export type Choice = "Paper" | "Rock" | "Scissors";

const delayTimeMs = 1500;
const choices: Choice[] = ["Paper", "Rock", "Scissors"];

const ChoiceEl = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [playable, setPlayable] = useState(true);

  const { addPoint } = useScore();

  const getComputerChoice = (): Choice => {
    const i = Math.floor(Math.random() * 3);
    return choices[i];
  };

  const calculateWinner = (player: Choice, comp: Choice): null | boolean => {
    if (player === comp) {
      return null;
    } else if (
      (player === "Paper" && comp === "Rock") ||
      (player === "Rock" && comp === "Scissors") ||
      (player === "Scissors" && comp === "Paper")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const cleanup = (isPlayerWin: null | boolean) => {
    setPlayable(true);
    setPlayerChoice(null);
    setComputerChoice(null);

    if (isPlayerWin !== null) {
      addPoint(isPlayerWin);
    }
  };

  const handleClick = (type: Choice) => {
    if (!playable) {
      return;
    }

    setPlayable(false);
    setPlayerChoice(type);
    const computerChoice = getComputerChoice();
    setComputerChoice(computerChoice);

    const isPlayerWin = calculateWinner(type, computerChoice);

    setTimeout(() => cleanup(isPlayerWin), delayTimeMs);
  };

  return (
    <S.Container>
      <Battle
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        playable={playable}
      />
      <S.ChoicesWrapper>
        {choices.map(el => (
          <Button
            key={el}
            onClick={() => handleClick(el)}
            el={el}
            playable={playable}
          />
        ))}
      </S.ChoicesWrapper>
    </S.Container>
  );
};

export default ChoiceEl;
