import React from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Left = styled.div`
 float: left;
 margin-left: 250px;
 margin-top:200px;
 color: white;
 z-index: 3;
 position: fixed;
 display:block;
 cursor: pointer;
`
const LeftArrow = (props) => (
  <div>
      <Left onClick={props.prevImage}><FaAngleLeft/></Left>
  </div>
);

export default LeftArrow;

{/* <strong>&lt;</strong> */}