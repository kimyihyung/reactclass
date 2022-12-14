import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const sliderText = {
  title: "WEATHER",
  desc1: "기상 정보를 알고있는 것은 중요합니다.",
  desc2: "날씨에 대한 정보를 알아봅시다.",
  btn1: "자세히 보기",
  btn2: "사이트 보기",
};

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="desc">
              <span>{sliderText.title}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br />
                {sliderText.desc2}
              </p>
              <div class="btn">
                <a href="/">{sliderText.btn1}</a>
                <a href="/" class="black">
                  {sliderText.btn2}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{sliderText.title}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br />
                {sliderText.desc2}
              </p>
              <div class="btn">
                <a href="/">{sliderText.btn1}</a>
                <a href="/" class="black">
                  {sliderText.btn2}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{sliderText.title}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br />
                {sliderText.desc2}
              </p>
              <div class="btn">
                <a href="/">{sliderText.btn1}</a>
                <a href="/" class="black">
                  {sliderText.btn2}
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
