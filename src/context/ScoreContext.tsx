import { createContext, FC, useContext, useState } from "react";

type Score = {
  player: number;
  computer: number;
};

interface ScoreProps {
  score: Score;
  addPoint: (isPointToPlayer: boolean) => void;
}

const ScoreContext = createContext({} as ScoreProps);

export const ScoreProvider: FC = ({ children }) => {
  const [score, setScore] = useState<Score>({
    player: 0,
    computer: 0,
  });

  const addPoint = (toPlayer: boolean) => {
    setScore(prev =>
      toPlayer
        ? { ...prev, player: prev.player + 1 }
        : { ...prev, computer: prev.computer + 1 }
    );
  };

  return (
    <ScoreContext.Provider value={{ score, addPoint }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
