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
export const starPosition = styled.div`
    position: absolute;
    width: 50%;
    Star{
        
    }
`;