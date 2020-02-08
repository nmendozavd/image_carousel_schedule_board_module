import React from 'react';
import styled from 'styled-components';

const Street = styled.div`
display: flex;
background-color: rgb(88,88,88);
color: white;
width:80;
height:60;
position: absolute;
margin-left:649px;
margin-top:415px;
justify-content: center;
align-items: flex-start;
flex-direction: column;
`
const Wrapper = styled.div`
  &:hover ${Icon} {
    opacity: 1;
  }
`
const Icon = styled.svg`
top:10;
left:25;
position: absolute;
opacity: 0.5;
width: 25;
:hover {
  opacity: 1;
}
`
const Text = styled.small`
  float: right;
  opacity: 0.5;
  position:absolute;
  top:40;
  left:5;
  :hover {
    opacity: 1;
}
`
const StreetView = () => (
  <Wrapper>
    <Street>
      <Icon><path fill='white' d="M15 12.382l-1.77.885a.46.46 0 0 0-.23.363V17h-2v-3.37a.455.455 0 0 0-.23-.363L9 12.382V12c0-1.558.363-3 3-3 2.644 0 3 1.517 3 3v.382zM12 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm4 2c0-2.205-1.794-4-4-4S8 1.795 8 4c0 1.405.731 2.637 1.829 3.35C8.364 7.876 7 9.13 7 12v1.365c0 .14.108.307.23.368l1.77.885v4.134c0 .137.104.248.258.248h5.484a.251.251 0 0 0 .258-.248v-4.134l1.77-.885a.441.441 0 0 0 .23-.368V12c0-2.87-1.364-4.125-2.829-4.65A3.994 3.994 0 0 0 16 4zm2 11.455v2.048c2.425.456 4 1.18 4 1.997 0 1.38-4.477 2.5-10 2.5S2 20.88 2 19.5c0-.818 1.575-1.54 4-1.997v-2.048c-3.114.532-6 1.663-6 4.045C0 23.561 8.392 24 12 24c3.608 0 12-.439 12-4.5 0-2.382-2.886-3.513-6-4.045z"></path></Icon> 
      <Text>Street View</Text>
    </Street>
  </Wrapper>
  
)

export default StreetView;
