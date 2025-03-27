import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderWrapper = styled.div`
  /* margin-top: 100px; */
  height: 80px;
  background: #f9c5c5;
  overflow-x: auto;
  white-space: nowrap;
  /* direction: ltr; */
  display: flex;
  align-items: center;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MotionMenu = styled(motion.ul)`
  display: inline-flex;
  gap: 35px;
  padding: 0 30px;
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
  return (
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
