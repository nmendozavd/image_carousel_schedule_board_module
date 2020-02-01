import React from 'react';
import styled, {keyframes} from 'styled-components';
import { FaAngleRight } from 'react-icons/fa';


const Right = styled.div`
  float: right;
  margin-right:200px;
  margin-top:200px;
  color: black;
  z-index:3;
  position: relative;
  display: block;
  cursor: pointer;
`
const RightArrow = (props) => (
  <div>
      <Right onClick={props.nextImage}><FaAngleRight/></Right>
      
  </div>
);

export default RightArrow;

{/* <strong>&gt;</strong> */}