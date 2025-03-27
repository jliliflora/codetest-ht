import styled from "styled-components";
import TabContent from "./TabContent";

interface Props {
  selected: string;
}

const menus = [
  "차트",
  "Whook",
  "이벤트",
  "뉴스",
  "스토어",
  "충전소",
  "menu1",
  "menu2",
];

const Container = styled.div`
  overflow: hidden;
  width: 100%;
`;

const SliderWrapper = styled.div<{ index: number }>`
  display: flex;
  width: ${425 * menus.length}px;
  transition: transform 0.4s ease;
  transform: translateX(
    ${(props) => `-${props.index * (100 / menus.length)}%`}
  );
`;

const TabContentWrapper = styled.div`
  width: 425px;
  flex-shrink: 0;
`;

function SlidingTabs({ selected }: Props) {
  const currentIndex = menus.indexOf(selected);

  return (
    <Container>
      <SliderWrapper index={currentIndex}>
        {menus.map((menu) => (
          <TabContentWrapper key={menu}>
            <TabContent selected={menu} />
          </TabContentWrapper>
        ))}
      </SliderWrapper>
    </Container>
  );
}

export default SlidingTabs;
