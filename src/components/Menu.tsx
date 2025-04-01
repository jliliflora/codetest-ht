import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

interface HeaderProps {
  selected: string;
  setSelected: (value: string) => void;
}

// =============== style ===============
const HeaderWrapper = styled.div`
  padding: 5px 0px;
  /* background-color: #f5f5f5; */
`;
const MenuContainer = styled.div`
  position: relative;
  overflow: visible;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 15px 0px 5px 10px;
    /* background-color: #c913a8; */
    overflow: visible;
  }
  .slick-track {
    background-color: #ffdbdb;
    border-top-left-radius: 27px;
    border-bottom-left-radius: 27px;
    display: flex;
    padding: 5px 7px;
  }

  .slick-slide {
    margin-right: 15px;
  }

  .slick-slide:last-child {
    margin-right: 0px;
  }
`;

const MenuBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active", // active는 DOM에 전달하지 않음
})<{ active: boolean }>`
  padding: 13px 25px;
  margin: 0;
  border: none;
  border-radius: 25px;
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  z-index: 2;
  position: relative;
  color: ${({ active }) => (active ? "#d84c7e" : "#333")};

  background-color: ${({ active }) =>
    active ? "rgba(216, 76, 126, 0.1)" : "transparent"};

  transition: all 0.2s ease;

  &:hover {
    color: #d84c7e;
  }
`;

// =============== 메뉴 리스트 ===============
const menuItems = [
  "차트",
  "Whook",
  "이벤트",
  "뉴스",
  "스토어",
  "충전소",
  "menu1",
  "menu2",
];

function MenuSlider({ selected, setSelected }: HeaderProps) {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 20,
    cssEase: "ease-out",
  };

  return (
    <HeaderWrapper>
      <MenuContainer>
        <StyledSlider {...settings}>
          {menuItems.map((item) => (
            <MenuBtn
              key={item}
              onClick={() => setSelected(item)}
              active={selected === item}
            >
              {item}
            </MenuBtn>
          ))}
          {/* 오른쪽 여백용 슬라이드 */}
          <div style={{ width: "20px", flexShrink: 0 }} />
        </StyledSlider>
      </MenuContainer>
    </HeaderWrapper>
  );
}

export default MenuSlider;
