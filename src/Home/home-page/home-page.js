import React from "react";
import Stars from "../../animations/stars/star";
import * as S from "./home-page.style";
import Astro from "../../assets/EditSpaceAstronaut1.png";
import AstroJS from "../../animations/AstroJS";
import AnimationText from "../../animations/text/animationText";
import Planet from "../../assets/Planet.png";
import Clound from "../../assets/Clound.png";

function Home() {
  AstroJS();
  return (
    <S.backgroundHome>
      <S.textPosition>
        <AnimationText />
      </S.textPosition>
      <Stars />
      <S.posAstronaut>
        <S.Astronaut src={Astro} />
        <S.Planet src={Planet} />
        <S.Clound src={Clound} />
      </S.posAstronaut>
    </S.backgroundHome>
  );
}

export default Home;
