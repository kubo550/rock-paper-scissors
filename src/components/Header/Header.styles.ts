import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #eee;
    position: relative;


    h3, h1 {
        margin-top: 0;
    }
    
    div {
        display: flex;
        justify-content:center;
        align-items:center;
        
        img {
            margin: 0 20px;
        }
    }

`;


export const Reset = styled.img`
    position: absolute;
    top: 0px;
    right: 20px;
    cursor: pointer;
`