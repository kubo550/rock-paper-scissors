import styled from "styled-components";

interface ButtonProps {
    color: string,
    playable: boolean
}

export const Button = styled.div<ButtonProps>`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 20px solid ${({ color }) => color};
    background-color: white;
    opacity: ${({ playable }) => playable ? 1 : 0.4};
    cursor: ${({ playable }) => playable ? "pointer" : "default"};
    
    display: flex;
    justify-content:center;
    align-items:center;

`