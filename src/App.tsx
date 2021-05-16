import styled from "styled-components";
import { Choice, Header } from "./components";
import { ScoreProvider } from "./context/ScoreContext";
const Container = styled.div``;

const App = () => {
  return (
    <ScoreProvider>
      <Container>
        <Header />
        <Choice />
      </Container>
    </ScoreProvider>
  );
};

export default App;
