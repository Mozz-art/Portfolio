import styled from 'styled-components';
import MyWorkImage from './../assets/MyWork.png';

export const backgroundMyWork = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${MyWorkImage});
  background-size: calc(100% + var(--x) / 6);
  background-position: bottom;
  background-repeat: no-repeat;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`

export const carouselPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const carouselPos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;

  .slide {
    
  }

  .slick-slide img {
    width: 100%;
    height: auto;
  }

  .slick-dots{
    position: absolute;
    bottom: 1rem;
  }
  .slick-dots li button:before {
  font-size: 12px;
  }
  

  .carrossel-container {
    
  width: 90%;
  height: 80%;
  background-color: rgba(224, 234, 235, 0.2);
  border-radius: 5%;
  overflow: hidden;
  box-shadow: 0 5px 0 rgb(0, 0, 0, 0.2);
  animation: fade-in 0.8s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  h3{
    color: white;
    width: 90%;
    height: auto;
    background-color: #000;
    border-radius: 5%;
  }
  }


`
