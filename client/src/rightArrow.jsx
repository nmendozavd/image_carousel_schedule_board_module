import React from 'react';
import styled, {keyframes} from 'styled-components';


const Button = styled.button`
  float: right;
  margin-right:200px;
`
const RightArrow = (props) => (
  <div>
      <Button onClick={props.nextImage}>Right Arrow Here</Button>
      
  </div>
);

export default RightArrow;