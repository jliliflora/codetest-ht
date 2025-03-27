import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const HeaderWrapper = styled.div`
  margin-top: 100px;
  height: 70px;
  background: #f9c5c5;
  overflow-x: auto;
  white-space: nowrap;
  direction: ltr;

  /* scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

const MotionMenu = styled(motion.ul)`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  min-width: max-content;
`;

const MenuLi = styled.li`
  font-weight: bold;
  flex: 0 0 auto;
  cursor: pointer;
`;

function Header() {
  //페이지 진입 시 스크롤 위치 잡기
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  }, []);

  return (
    <HeaderWrapper ref={scrollRef}>
      <MotionMenu
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
      >
        <MenuLi>example1</MenuLi>
        <MenuLi>example2</MenuLi>
        <MenuLi>example3</MenuLi>
        <MenuLi>example4</MenuLi>
        <MenuLi>example5</MenuLi>
        <MenuLi>example6</MenuLi>
      </MotionMenu>
    </HeaderWrapper>
  );
}

export default Header;
