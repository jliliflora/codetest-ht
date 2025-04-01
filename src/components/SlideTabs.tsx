// SlideTabs : 탭/슬라이드 관리 역할
import styled from "styled-components";
import Slider from "react-slick";
import { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentList from "./ContentList";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
}

// =============== style ===============
const Container = styled.div`
  overflow: hidden;
  width: 100%;
`;

const ScrollArea = styled.div`
  height: 500px;
  overflow-y: auto;
  padding: 3px 16px 16px 16px;

  /* 스크롤바 숨기기 (크로스 브라우징) */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const TabContentWrapper = styled.div`
  width: 425px;
  flex-shrink: 0;
`;

const CntTitle = styled.div`
  margin: 0 0 5px 3px;
`;

// =============== 메뉴 항목 리스트 ===============
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

function SlideTabs({ selected, setSelected }: Props) {
  // 좌우 슬라이드 기능
  const sliderRef = useRef<any>(null);
  const currentIndex = menus.indexOf(selected);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => {
      setSelected(menus[newIndex]);
    },
  };

  return (
    <Container>
      <ScrollArea id="scrollBox">
        <Slider {...settings} ref={sliderRef}>
          {menus.map((menu, index) => (
            <TabContentWrapper key={menu}>
              {index === currentIndex && (
                <div>
                  <CntTitle>{menu} 콘텐츠 리스트</CntTitle>
                  <ContentList key={menu} selected={menu} />
                </div>
              )}
            </TabContentWrapper>
          ))}
        </Slider>
      </ScrollArea>
    </Container>
  );
}

export default SlideTabs;
