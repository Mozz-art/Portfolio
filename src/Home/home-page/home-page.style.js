import styled from 'styled-components'
import BackHome from "../../assets/BackHome1.png"
import BackHomeTablet from "../../assets/BackHomeTablet.png"
import PlanetMobile from "../../assets/PlanetMobile.png"

export const backgroundHome = styled.div`
    display: flex;
    max-width: 100vw;
    max-height: 100vh;
    background-image: url(${BackHome});
    background-size: calc(100% + var(--x) / 3);
    background-position: center;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 768px){
        background-image: url(${BackHomeTablet});
        width: 100vw;
        height: 100vh;
        
    }

`
export const textPosition = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const posAstronaut = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: end;
    max-width: calc(100% - var(--x) / 50);
    @media (max-width: 450px){
        justify-content: center;

        
    }

`
export const Astronaut = styled.img`
    position: absolute;
    width: 40%;
    height: 70%;
    z-index: 2;

    @media (max-width: 450px){
        display:none;
    }
`

export const Planet = styled.img`
    position: absolute;
    z-index: 1;
    max-width: calc(100% - var(--x) / 100);
    max-height: calc(100% - var(--x) / 100);
    @media (max-width: 768px){
        width: 100vw;
        height: 100vh;
    }
    @media (max-width: 450px){
        display:none;
    }

`
export const Clound = styled.img`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;


    
`