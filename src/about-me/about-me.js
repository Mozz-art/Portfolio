import React from "react";
import * as S from "./about-me.style";
import AnimationTextAbout from "../animations/textAbout/animationTextAbout";
import AnimationTextLeft from "../animations/textAboutLeft/animationTextAboutLeft";
import AnimationTextRight from "../animations/textAboutRight/animationTextAboutRight";
import miniAstro from "../assets/mini.png";
import Stars from './../animations/stars/star';

function AboutMe() {
  return (
    <S.backgroundAbout>
      <Stars />
      <S.miniAstroPos>
        <S.miniAstro src={miniAstro} draggable="false" />
      </S.miniAstroPos>
      <AnimationTextAbout />
      <S.wrapper>
        <S.sideLeft>
          <AnimationTextLeft />
        </S.sideLeft>
        <S.sideRight>
          <AnimationTextRight />
        </S.sideRight>
        <S.footerAbout>
          <S.footerAboutA>
            <a href="https://github.com/Mozz-art/Mozz-art" id="zoom" className="devicon-github-original-wordmark colored"></a>
            
            <a href="https://www.linkedin.com/in/bruno-corona-braga-77971824b/" id="zoom" className="devicon-linkedin-plain colored"></a>

            <a href="" id="zoom" className="devicon-discordjs-plain colored"></a>
          </S.footerAboutA>

          <S.footerAboutB>
            <p>brunocorona@live.com</p>
          </S.footerAboutB>
        </S.footerAbout>
      </S.wrapper>
    </S.backgroundAbout>
  );
}

export default AboutMe;
