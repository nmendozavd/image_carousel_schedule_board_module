import React from 'react';
import styled from 'styled-components';
import {CarouselEntry, CarouselImage} from './carouselEntry.jsx'


const Right = styled.div`
display: flex;
background-color: rgb(88,88,88);
color: white;
width: 24px;
height:60;
position: absolute;
margin-left:764px;
margin-top:497px;
border-right: 5px solid rgba(255,255,255, 0.3);
`

const SVG = styled.svg`
  opacity: 0.5;
  position: absolute;
  top:10;
  width:30;
  z-index: 1;
  &:hover {
      opacity: 1;
  }
 
`


const CarouselRight = (props) => (
    <Right>
        <SVG onClick={props.handleTranslate}><path fill='white' d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></SVG>
    </Right>
)
export default CarouselRight;
