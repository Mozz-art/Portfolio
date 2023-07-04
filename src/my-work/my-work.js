import React from "react";
import StarsBackground from "./../animations/starsBackground/starBackground";
import * as S from "./my-work.styled";
import AnimationText from "./../animations/text/animationText";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyWork() {
    const settings = {
        arrow:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
      };
  return (
    <S.backgroundMyWork>
      <StarsBackground />
      <S.carouselPosition>
      <S.carouselPos>
      <Slider className="carrossel-container" {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      <div>
        <h3>Slide 4</h3>
      </div>
      <div>
        <h3>Slide 5</h3>
      </div>
      <div>
        <h3>Slide 6</h3>
      </div>
    </Slider>
    </S.carouselPos>
    </S.carouselPosition>
    </S.backgroundMyWork>
  );
}

export default MyWork;
