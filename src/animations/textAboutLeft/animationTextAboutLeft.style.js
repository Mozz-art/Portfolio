import styled from "styled-components";

export const txtEffectAboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 90%;
    background-color: rgb(0, 0, 0, 0.3);
    font-size: clamp(1rem, 5vw, 4rem);
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
    font-family: "nunito";
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    
  }
  h2{
    width: 80%;
    font-weight: 300;
    color: white;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
    font-family: "nunito";
    animation: scale 8s forwards cubic-bezier(0.5, 1, 0.89, 1) infinite;
  }


span {
  display: inline-block;
  font-size: clamp(1rem, 2vw, 2.5rem);
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 2.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 0.8s 2.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }

}


`
export const toolsLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  filter: blur(4px);
  box-shadow: 0 5px 0 rgb(0, 0, 0, 0.7);
  animation: fade-in 0.8s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  i {
    font-size: clamp(1rem, 4vw, 2.5rem);
    padding: 2%;
  }

`