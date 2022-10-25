import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
function Slider() {
    return (
        <div className="slider__inner">
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper section"
            >
                <SwiperSlide>
                    <div class="desc">
                        <span>WEATHER</span>
                        <h3>Weather</h3>
                        <p>기상 정보를 알고있는 것은 중요합니다.<br />
                            날씨에 대한 정보를 알아봅시다.
                        </p>
                        <div class="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" class="black">사이트 보기</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="desc">
                        <span>WEATHER</span>
                        <h3>Weather</h3>
                        <p>기상 정보를 알고있는 것은 중요합니다.<br />
                            날씨에 대한 정보를 알아봅시다.
                        </p>
                        <div class="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" class="black">사이트 보기</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="desc">
                        <span>WEATHER</span>
                        <h3>Weather</h3>
                        <p>기상 정보를 알고있는 것은 중요합니다.<br />
                            날씨에 대한 정보를 알아봅시다.
                        </p>
                        <div class="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" class="black">사이트 보기</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
}

export default Slider;