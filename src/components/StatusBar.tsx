import styled from "styled-components";

const StatusWrapper = styled.ul`
  height: 40px; // 혹은 20~30px 등 적당히
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusBarItem = styled.li`
  color: #fff;
  padding: 0px 20px;
`;

function StatusBar() {
  return (
    <StatusWrapper>
      <StatusBarItem>10:00</StatusBarItem>
      <StatusBarItem>10:00</StatusBarItem>
    </StatusWrapper>
  );
}

export default StatusBar;
