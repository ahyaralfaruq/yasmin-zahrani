// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "./style.css";

// import required modules
import { Autoplay} from "swiper";

const Carousel = () => {
    return (
        <section className="it-carousel">
            <h3 className="it-carousel-title-typography">Memories</h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // effect={"fade"}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="assets/img/yasmin-zahrani.png" alt="yasmin" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/img/yasmin.png" alt="yasmin" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Carousel