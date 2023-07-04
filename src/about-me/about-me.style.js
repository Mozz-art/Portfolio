import styled from "styled-components";
import BackAbout from "./../assets/backAbout.png";

export const backgroundAbout = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackAbout});
  background-size: calc(100% + var(--x) / 3);
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;
export const textPosition = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const miniAstroPos = styled.div`
  display: flex;
  position: absolute;
  top: 4.0625rem;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: calc(100% - var(--x) / 50);
`;
export const miniAstro = styled.img`
  height: auto;
  width: 10%;
  z-index: 4;
`;

export const wrapper = styled.div`
  width: 100vw;
  height: 75vh;
  position: absolute;
  top: 25%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
`;
export const sideLeft = styled.div`
  width: 40%;
  height: 80%;
  background-image: linear-gradient(
    rgba(154, 164, 250, 0.116),
    rgba(0, 225, 255, 0.336)
  );
  border-radius: 5% 0 0 5%;
  box-shadow: 0 5px 0 rgb(0, 0, 0);
  z-index: 2;
  cursor: pointer;
  :hover {
    background: rgba(224, 234, 235, 0.199);
  }
`;
export const sideRight = styled.div`
  width: 40%;
  height: 80%;
  background-image: linear-gradient(
    rgba(154, 164, 250, 0.116),
    rgba(0, 225, 255, 0.336)
  );
  border-radius: 0 5% 5% 0;
  box-shadow: 0 5px 0 rgb(0, 0, 0);
  z-index: 2;
  cursor: pointer;
  :hover {
    background: rgba(224, 234, 235, 0.199);
  }
`;
export const footerAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 15%;
`;
export const footerAboutA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 50%;
  background-color: rgba(224, 234, 235, 0.3);
  border-radius: 5%;
  box-shadow: 0 5px 0 rgb(0, 0, 0, 0.9);
  a{
    padding: 8%;
    font-size: 2.3rem;
    text-decoration: none;
  }
  #zoom:hover {
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
    transform: scale(1.3);
    border-radius: 12%;
    cursor: pointer;
  }
`;
export const footerAboutB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  p {
    color: white ;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
    font-size: 1.3rem;
  }
  p:hover {
    transform: scale(1.2);
    border-radius: 12%;
    cursor: pointer;
  }
`;
