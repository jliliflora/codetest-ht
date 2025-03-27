import styled from "styled-components";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import TabContent from "./TabContent";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
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

const SliderWrapper = styled(motion.div)`
  display: flex;
  width: ${425 * menus.length}px;
`;

const TabContentWrapper = styled.div`
  width: 425px;
  flex-shrink: 0;
`;

function SlidingTabs({ selected, setSelected }: Props) {
  const currentIndex = menus.indexOf(selected);
  const x = useMotionValue(-currentIndex * 425);

  // 탭 클릭으로 이동 시 animate
  useEffect(() => {
    animate(x, -currentIndex * 425, {
      type: "tween",
      duration: 0.4,
      ease: [0.33, 0, 0.2, 1],
    });
  }, [currentIndex, x]);

  // 드래그 후 인덱스 계산
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 100;
    const dragX = info.offset.x;

    if (dragX < -threshold && currentIndex < menus.length - 1) {
      setSelected(menus[currentIndex + 1]);
    } else if (dragX > threshold && currentIndex > 0) {
      setSelected(menus[currentIndex - 1]);
    }
  };

  return (
    <Container>
      <SliderWrapper
        style={{ x }}
        drag="x"
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
      >
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
