"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { StyledImage } from "./SlideBar.styles";

export default function SlideBar() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <StyledImage
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/109004720_2665931183726131_3145138587453179358_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8631f5&_nc_ohc=-UKjPqc6SVoAX_PgARJ&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfC-5oZm7KCO_no9MJ0cPGP1ZJ0noH5vId4iW5IdsnAlYA&oe=6539C55D"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage
            src="https://lh3.googleusercontent.com/pw/ADCreHfmxCP-4nD7AjLCWQlXeRTbtCWerwriQSBcSLxAXy8udyUPsWQNNhjfPPprdqN39AjcUP9bzttQylAshQulIXHakr1sR1GhUfnwRyULwbzwypc0na5KZMuQm6I_TTf1jthpl-amDT_qrEKzDOD5Rk_p=w977-h651-s-no?authuser=0"
            alt="img-1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage
            src="https://lh3.googleusercontent.com/pw/ADCreHdh1ROKqn20LLcJcazS-DKEtqjYBREPSnGsZiSVhvxWghucs_Yilcn6f3aRVqlBnJa-G9slfRf0ZqBKH8z8sYo1m7k3Lx3osXMRtf1FT6ARGf9R0QPZvYeFqTkP_Gjiuo8lys4IdyTxpKgAbcw4JYve=w977-h651-s-no?authuser=0"
            alt="img-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage
            src="https://lh3.googleusercontent.com/pw/ADCreHeiymAJkxn_miGvx6dcTMt5_Feb2HVxvpclFHsTMljmpxAnIdOuFT5fTR4tWVPezRgJh69kTR2dlRG76BkrVq7ZJULyioJCB_3P_OAu7j8J0jpc5cOMgUdLsM0bu1EHVgf2jpYMoNaZohb34jTuoJpm=w977-h651-s-no?authuser=0"
            alt="img-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage
            src="https://lh3.googleusercontent.com/pw/ADCreHcA9pdpYQTG-GDz3MfdoFmP3C9mcftREcUv_3QqiVrgmpGwreUUJvWG2zTZXybDkWp72v-HMIpxtSa91nXpuT8upzTio7YEPMMEDOzm9zWcxqyThHyDQ5r9eo3d6K-XkVrkPihfosw4qcoFhpNE97wA=w977-h651-s-no?authuser=0"
            alt="img-4"
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
