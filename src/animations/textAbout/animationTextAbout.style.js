import styled from "styled-components";

export const txtEffectAbout = styled.div`
  position: absolute;
  width: 100%;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    
    width: 95vw;
    font-size: clamp(1.5em, 5vw, 2em);
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
    text-align: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    transform: scale(0.94);
    animation: scale 8s forwards cubic-bezier(0.5, 1, 0.89, 1) infinite;
  }
  #spaceBetweenRight{
    margin-right: 15%;

  }
  #spaceBetweenLeft{
    margin-right: 0;

  }

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
  }

  span:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(4) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(5) {
    animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(6) {
    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(7) {
    animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(8) {
    animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(9) {
    animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(10) {
    animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(11) {
    animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(12) {
    animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(13) {
    animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(14) {
    animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(15) {
    animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(16) {
    animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(17) {
    animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  span:nth-child(18) {
    animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(19) {
    animation: fade-in 0.8s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(20) {
    animation: fade-in 0.8s 2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
