import styled, {keyframes} from 'styled-components'
import Image from './image.jsx'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Trigger = styled.div`
&:hover ${Image} {
    transform: rotate(20deg);
  };
`


export default Trigger;