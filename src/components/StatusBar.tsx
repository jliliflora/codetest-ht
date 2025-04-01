import styled from "styled-components";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// =============== style ===============
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
      <StatusBarItem>
        <FontAwesomeIcon icon={faWifi} />
      </StatusBarItem>
    </StatusWrapper>
  );
}

export default StatusBar;
