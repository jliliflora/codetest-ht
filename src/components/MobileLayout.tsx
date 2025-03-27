import styled from "styled-components";
import Header from "./Header";
import Banner from "./Banner";
import ContentList from "./ContentList";
import StatusBar from "./StatusBar";

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

function MobileLayout() {
  return (
    <Layout>
      <StatusBar />
      <Header />
      <Banner />
      <ContentList />
    </Layout>
  );
}

export default MobileLayout;
