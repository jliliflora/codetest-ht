import styled from "styled-components";
import TabContent from "./TabContent";
import Slider from "react-slick";
import { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const TabContentWrapper = styled.div`
  width: 425px;
  flex-shrink: 0;
`;

function SlideTabs({ selected, setSelected }: Props) {
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
    beforeChange: (oldIndex: number, newIndex: number) => {
      setSelected(menus[newIndex]);
    },
  };

  return (
    <Container>
      <Slider {...settings} ref={sliderRef}>
        {menus.map((menu) => (
          <TabContentWrapper key={menu}>
            <TabContent selected={menu} />
          </TabContentWrapper>
        ))}
      </Slider>
    </Container>
  );
}

export default SlideTabs;
