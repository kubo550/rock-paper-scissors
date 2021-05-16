import { useState } from "react";
import { Battle } from "..";
import { useScore } from "../../context/ScoreContext";
import * as S from "./Choice.style";

export type Choice = "Paper" | "Rock" | "Scessors";

const delayTimeMs = 3000;
const choices: Choice[] = ["Paper", "Rock", "Scessors"];

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
    console.log(player, comp);

    if (player === comp) {
      return null;
    } else if (
      (player === "Paper" && comp === "Rock") ||
      (player === "Rock" && comp === "Scessors") ||
      (player === "Scessors" && comp === "Paper")
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
      <Battle playerChoice={playerChoice} computerChoice={computerChoice} />
      {choices.map(element => (
        <div key={element}>
          <button onClick={() => handleClick(element)}> {element} </button>
        </div>
      ))}
    </S.Container>
  );
};

export default ChoiceEl;
