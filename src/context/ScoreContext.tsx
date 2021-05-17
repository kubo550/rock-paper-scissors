import { createContext, FC, useContext, useState } from "react";

type Score = {
  player: number;
  computer: number;
};

interface ScoreProps {
  score: Score;
  addPoint: (isPointToPlayer: boolean) => void;
  reset: () => void;
}

const ScoreContext = createContext({} as ScoreProps);

const initialScore: Score = {
  player: 0,
  computer: 0,
};

export const ScoreProvider: FC = ({ children }) => {
  const [score, setScore] = useState<Score>(initialScore);

  const addPoint = (toPlayer: boolean) => {
    setScore(prev =>
      toPlayer
        ? { ...prev, player: prev.player + 1 }
        : { ...prev, computer: prev.computer + 1 }
    );
  };

  const reset = () => setScore(initialScore);

  return (
    <ScoreContext.Provider value={{ score, addPoint, reset }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
