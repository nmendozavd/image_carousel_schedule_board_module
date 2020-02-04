import React from 'react';
import styled from 'styled-components';


const CarouselImage = styled.img`
  height:50;
  width:70;
  padding-right:2.5px;
  padding-left:2.5px;
  position: relative;
  opacity: 0.5;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &:hover {
    opacity: 1;
    outline: 1.5px solid white;
    outline-offset: -2.0px;
  };
`
const CarouselEntry = (props) => (
  <div>
    <CarouselImage style={{transform: props.translateLeft ? 'translateX(-535px)' : 'translateX(0px)'}} onClick={props.selectImage} src={props.image.URL} /> 
  </div>
)
export default CarouselEntry;