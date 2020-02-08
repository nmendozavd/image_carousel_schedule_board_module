import React from 'react';
import styled, {keyframes} from 'styled-components';
// import { FaAngleRight } from 'react-icons/fa';


const Right = styled.div`
  margin-top:200px;
  margin-left:680px;
  color: black;
  z-index:1;
  position: absolute;
  display: block;
  cursor: pointer;
  transition: opacity .2s ease-out 0s;
`
const RightArrow = (props) => (
  <div>
      <Right onClick={props.nextImage}><svg><path fill='white' d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg></Right>
  </div>
);

export default RightArrow;
