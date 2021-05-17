import styled from "styled-components";
import { Choice, Footer, Header } from "./components";
import { ScoreProvider } from "./context/ScoreContext";

const Container = styled.div`
  width: 65vw;
  min-width: 700px;
  height: 80vh;
  min-height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  -webkit-box-shadow: inset 0px 0px 15px 5px rgba(255, 255, 255, 0.253);
  box-shadow: inset 0px 0px 15px 5px rgba(255, 255, 255, 0.212);
  padding: 20px;
`;

const App = () => {
  return (
    <ScoreProvider>
      <Container>
        <Header />
        <Choice />
        <Footer />
      </Container>
    </ScoreProvider>
  );
};

export default App;
