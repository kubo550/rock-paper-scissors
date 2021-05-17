import { icons, colors } from "../../../assets";
import { Choice } from "../Choice";
import * as S from "./Button.style";

interface ButtonProps {
  onClick: () => void;
  el: Choice;
  playable: boolean;
}

const transform = new Map<Choice, [string, string]>([
  ["Paper", [icons.paper, colors.blue]],
  ["Scissors", [icons.scissors, colors.yellow]],
  ["Rock", [icons.rock, colors.red]],
]);

const Button: React.FC<ButtonProps> = ({ el, onClick, playable }) => {
  const [src, color] = transform.get(el)!;
  return (
    <S.Button color={color} onClick={onClick} playable={playable}>
      <img src={src} alt={el} width='70px' />
    </S.Button>
  );
};

export default Button;
