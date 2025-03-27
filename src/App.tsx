import styled from "styled-components";
import MobileLayout from "./components/MobileLayout";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fde3e3;
  overflow: auto;
`;

function App() {
  return (
    <>
      <Wrapper>
        <MobileLayout />
      </Wrapper>
    </>
  );
}

export default App;
