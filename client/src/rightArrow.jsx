import React from 'react';
import styled, {keyframes} from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';


const Right = styled.div`
  margin-top:200px;
  margin-left:900px;
  color: white;
  z-index:1;
  position: absolute;
  display: block;
  cursor: pointer;
  transition: opacity .2s ease-out 0s;
`
const RightArrow = (props) => (
  <div>
      <Right onClick={props.nextImage}><FaAngleRight/></Right>
      
  </div>
);

export default RightArrow;

{/* <strong>&gt;</strong> */}