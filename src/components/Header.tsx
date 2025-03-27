import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const HeaderWrapper = styled.div`
  margin-top: 100px;
  height: 100px;
  background: #f9c5c5;
  overflow-x: auto;
  white-space: nowrap;
  /* direction: ltr; */
  display: flex;
  align-items: center;

  /* scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

const MotionMenu = styled(motion.ul)`
  display: inline-flex;
  gap: 35px;
  padding: 0 16px;
  /* min-width: max-content; */
  /* border: 1px solid red; */
`;

const MenuLi = styled.li`
  font-weight: bold;
  flex: 0 0 auto;
  cursor: pointer;
  /* border: 1px solid blue; */
`;

function Header() {
  //페이지 진입 시 스크롤 위치 잡기
  // const scrollRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
  //   }
  // }, []);

  return (
    // <HeaderWrapper ref={scrollRef}>
    <HeaderWrapper>
      <MotionMenu
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
      >
        <MenuLi>차트</MenuLi>
        <MenuLi>Whook</MenuLi>
        <MenuLi>이벤트</MenuLi>
        <MenuLi>뉴스</MenuLi>
        <MenuLi>스토어</MenuLi>
        <MenuLi>충전소</MenuLi>
        <MenuLi>Menu1</MenuLi>
        <MenuLi>Menu2</MenuLi>
      </MotionMenu>
    </HeaderWrapper>
  );
}

export default Header;
