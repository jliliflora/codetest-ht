import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";
import ContentList from "./ContentList";

const Layout = styled.div`
  width: 100%;
  max-width: 425px;
  /* height: 100%; */
  height: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  /* border: 1px solid red; */
`;

const StatusBar = styled.ul`
  height: 30px; // 혹은 20~30px 등 적당히
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusBarItem = styled.li`
  color: #fff;
  padding: 0px 20px;
`;

function MobileLayout() {
  return (
    <Layout>
      <StatusBar>
        <StatusBarItem>10:00</StatusBarItem>
        <StatusBarItem>10:00</StatusBarItem>
      </StatusBar>
      <Header />
      <Banner />
      <ContentList />
    </Layout>
  );
}

export default MobileLayout;
