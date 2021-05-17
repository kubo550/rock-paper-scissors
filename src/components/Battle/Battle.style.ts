import styled, { keyframes } from "styled-components";
import { colors } from "../../assets"

export const Wrapper = styled.div`
  height: 50%;
  min-height: 240px;
  background-color: rgba(255,255,255, 0.1);
  box-shadow:  0px 0px 15px 5px rgba(255, 255, 255, 0.212);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h1,
  h3 {
    margin: 0;
  }
`;

const shake = keyframes`
 0% {
    transform:  translate(0px,0px)  ;
  }
  15% {
    transform:  translate(0px,-35px)  ;
  }
  30% {
    transform:  translate(0px,0px)  ;
  }
  45% {
    transform:  translate(0px,-25px)  ;
  }
  60% {
    transform:  translate(0px,0px)  ;
  }
  75% {
   transform:  translate(0px,-25px)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
`;

interface CircleProps {
  color: string
  animation: boolean
}

export const Circle = styled.div<CircleProps>`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: ${colors.gery};
  border: 20px solid ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${({ animation }) => animation ? shake : "none"} ease-in-out 1s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
`;

export const FixedImage = styled.img`
  transform: translate(15px, -10px);
`;
