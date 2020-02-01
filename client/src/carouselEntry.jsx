import React from 'react';
import styled from 'styled-components';


const CarouselImage = styled.img`
  height:50;
  width:65;
  padding-right:2.5px;
  padding-left:2.5px;
  position: relative;
  opacity: ${props => props.current ? 1.0 : .5};
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &:hover {
    opacity: 1;
    outline: 1.5px solid white;
    outline-offset: -2.0px;
  };
`
// const Trigger = styled.div`

// &:active ${CarouselImage} {
//     transform: translateX(-200px);
//     opacity:1;
// `

const CarouselEntry = (props) => (
    <div>
        
            
      <CarouselImage src={props.image.URL}/> 
        
        
      {/* <CarouselImage current src={props.images[props.currentIndex].URL}/> */}
    </div>
)
export {CarouselEntry, CarouselImage};