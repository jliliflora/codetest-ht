import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// =============== style ===============
const BannerWrapper = styled.div`
  height: 250px;
  /* background-color: #a3ded5; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
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

// =============== 배너 리스트 ===============
const bannerData = [
  { text: "Banner 1", url: "https://example.com/banner1" },
  { text: "Banner 2", url: "https://example.com/banner2" },
  { text: "Banner 3", url: "https://example.com/banner3" },
  { text: "Banner 4", url: "https://example.com/banner4" },
  { text: "Banner 5", url: "https://example.com/banner5" },
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
        {bannerData.map((banner, i) => (
          <SwiperSlide
            key={i}
            onClick={() => window.open(banner.url, "_blank")}
          >
            <SlideBox>{banner.text}</SlideBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerWrapper>
  );
}

export default Banner;
