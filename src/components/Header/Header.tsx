import { useScore } from "../../context/ScoreContext";
import * as S from "./Header.styles";

const Header = () => {
  const {
    score: { player, computer },
  } = useScore();

  return (
    <S.Wrapper>
      <div>
        <img src='' alt='' />
      </div>
      <h3>Player</h3>
      <h1>
        {player} : {computer}
      </h1>
      <h3>Computer</h3>
      <div>
        <img src='' alt='' />
      </div>
    </S.Wrapper>
  );
};

export default Header;
