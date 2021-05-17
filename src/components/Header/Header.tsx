import { useScore } from "../../context/ScoreContext";
import { profs, images } from "../../assets";
import * as S from "./Header.styles";

const Header = () => {
  const {
    score: { player, computer },
    reset,
  } = useScore();

  return (
    <S.Wrapper>
      <div>
        <img src={profs.player} alt='player' width='40' />
        <h3>Player</h3>
      </div>
      <h1>
        {player} : {computer}
      </h1>
      <div>
        <h3>Comp</h3>
        <img src={profs.computer} alt='computer' width='40' />
      </div>
      <S.Reset
        src={images.reset}
        alt='Reset button'
        title='Reset'
        width='40'
        onClick={reset}
      />
    </S.Wrapper>
  );
};

export default Header;
