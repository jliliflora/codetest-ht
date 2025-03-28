import styled from "styled-components";
import ContentList from "./ContentList";

interface Props {
  selected: string;
}

// const ContentArea = styled.div`
//   /* background-color: #524141; */
// `;

function TabContent({ selected }: Props) {
  return (
    <ContentList title={`${selected} 콘텐츠 리스트`} categoryKey={selected} />
  );
}

export default TabContent;
