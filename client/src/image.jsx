import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity:0; }
`;

const Image = styled.img`
  position: absolute;
  height: 500;
  width: 700;
  opacity: 1;
  animation: ${fadeIn} 10s;
  left: 250;
  // z-index: -1;
`

export default Image;

// display:flex;
//   justify-content: center;
//   align-items: center;