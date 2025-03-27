import styled from "styled-components";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const HeaderWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
`;

const MenuWrapper = styled.div`
  height: 70px;
  /* background: #f9c5c5; */
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  align-items: center;
  position: relative;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MotionMenu = styled(motion.ul)`
  display: inline-flex;
  gap: 12px;
  margin: 0 10px;
  padding: 10px 15px;
  background: #ffdbdb;
  border-radius: 27px;
  position: relative;
`;

const MenuLi = styled.li`
  flex: 0 0 auto;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

const MenuBg = styled(motion.div)`
  position: absolute;
  top: 6px;
  height: calc(100% - 12px);
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 0;
`;

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

function Header() {
  const [selected, setSelected] = useState(menus[0]);
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });
  const menuRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  useLayoutEffect(() => {
    const el = menuRefs.current[selected];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setBgStyle({
        left: offsetLeft - 7, // ⬅️ 왼쪽 여백을 더 앞쪽으로!
        width: offsetWidth + 14, // ⬅️ 전체 너비를 조금 더 넓게!
      });
    }
  }, [selected]);

  return (
    <HeaderWrapper>
      <MenuWrapper>
        <MotionMenu
          drag="x"
          dragConstraints={{ left: -200, right: 0 }}
          dragElastic={0.2}
          whileTap={{ cursor: "grabbing" }}
        >
          <MenuBg
            layoutId="bg"
            style={{ left: bgStyle.left, width: bgStyle.width }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.33, 0, 0.2, 1],
            }}
          />
          {menus.map((menu) => (
            <MenuLi
              key={menu}
              onClick={() => setSelected(menu)}
              ref={(el) => {
                menuRefs.current[menu] = el;
              }}
            >
              {menu}
            </MenuLi>
          ))}
        </MotionMenu>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;
