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
margin-left:802px;
margin-top:479px;
`

const SVG = styled.svg`
  opacity: 0.5;
  position: absolute;
  z-index: 1;
  &:hover {
      opacity: 1;
  }
  &:active ${CarouselImage} {
    transform: translateX(-600px);

`
const CarouselRight = () => (
    <Right><SVG><path fill='white' d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></SVG></Right>
    
)
export default CarouselRight;
