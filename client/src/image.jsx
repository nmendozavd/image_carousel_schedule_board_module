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
  height: 441;
  width: 728;
  opacity: 1;
  animation: ${fadeIn} 10s;
  left: 149;
  top: 80;
  // z-index: -1;
`

export default Image;

// display:flex;
//   justify-content: center;
//   align-items: center;