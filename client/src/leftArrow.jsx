import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 250px;
`
const LeftArrow = (props) => (
  <div>
      <Button onClick={props.prevImage}>Left Arrow Here</Button>
  </div>
);

export default LeftArrow;