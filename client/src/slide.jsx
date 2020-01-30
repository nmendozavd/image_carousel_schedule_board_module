import React from 'react';
import styled, { keyframes } from 'styled-components'
import Image from './image.jsx';



const Slide = (props) => (
  <div>
    {/* <Image src={props.image.URL} /> */}
    
    <Image src={props.images[props.currentIndex].URL} />
    

  </div>
);

export default Slide;
