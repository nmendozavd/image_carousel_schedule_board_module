import React from 'react';
import styled from 'styled-components';

const Left = styled.div`
  display: flex;
  background-color: rgb(88,88,88);
  color: white;
  width: 24px;
  height:60;
  position: absolute;
  margin-top:479px;
  z-index: 1;
  margin-left:140px;
 
`

const SVG = styled.svg`
  opacity: 0.5;
  top: 10
  &:hover {
      opacity: 1;
  }

`
const CarouselLeft = () => (
    <Left>
        <SVG><path fill="white" d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></SVG>
        </Left>
    
)
export default CarouselLeft;