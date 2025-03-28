import styled from "styled-components";
import MobileLayout from "./components/MobileLayout";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start; // 여기 중요!
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
