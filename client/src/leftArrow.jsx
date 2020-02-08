import React from 'react';
import styled from 'styled-components';

const Left = styled.div`
//  float: left;
 margin-left: 10px;
 margin-top:200px;
 color: white;
 z-index: 1;
 position: absolute;
 display:block;
 cursor: pointer;
`
const LeftArrow = (props) => (
      <Left onClick={props.prevImage}><svg><path fill="white" d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/></svg></Left>
);

export default LeftArrow;
