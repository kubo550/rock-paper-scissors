import { Choice } from "../Choice/Choice";

interface BattleProps {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
}

const Battle: React.FC<BattleProps> = ({ computerChoice, playerChoice }) => {
  return (
    <div>
      <h3> {playerChoice} </h3>
      <h1>VS</h1>
      <h3> {computerChoice} </h3>
    </div>
  );
};

export default Battle;
