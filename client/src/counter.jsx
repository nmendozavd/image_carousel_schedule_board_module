import React from 'react';
import styled from 'styled-components'

const Count = styled.div`
  display: flex;
  background-color: rgba(0,0,0,.7);
  color: white;
  width: 60px;
  height:24;
  padding-top: 4;
  padding-left: 9;
  font-family: Libre Franklin;
  z-index: 1;
  position: absolute;
  margin-top: 450px;
  margin-left: 850px;
  transition: opacity .2s ease-out 0s;

`

const Counter = (props) => (
    <div>
        
      <Count>{props.currentIndex+1} of {props.images.length}</Count>
    </div>
)

export default Counter;