import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const BannerWrapper = styled.div`
  height: 250px;
  /* background-color: #f1f1f1; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SlideBox = styled.div`
  height: 220px;
  border-radius: 15px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

const slides = ["Banner 1", "Banner 2", "Banner 3", "Banner 4", "Banner 5"];
const bannerData = [
  { text: "Banner 1", url: "https://example.com/banner1" },
  { text: "Banner 2", url: "https://example.com/banner2" },
  { text: "Banner 3", url: "https://example.com/banner3" },
  { text: "Banner 4", url: "https://example.com/banner3" },
  { text: "Banner 5", url: "https://example.com/banner3" },
];

function Banner() {
  return (
    <BannerWrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} //3초에 한번씩 자동으로
        loop={true}
        centeredSlides={true}
        slidesPerView={1.1}
        spaceBetween={7}
        style={{ width: "100%" }}
      >
        {bannerData.map((banner, index) => (
          <SwiperSlide
            key={index}
            onClick={() => window.open(banner.url, "_blank")}
          >
            <SlideBox>{banner.text}</SlideBox>
          </SwiperSlide>
        ))}
        {/* {slides.map((text, i) => (
          <SwiperSlide key={i}>
            <SlideBox>{text}</SlideBox>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </BannerWrapper>
  );
}

export default Banner;
