import styled from 'styled-components';

import {Props} from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px; 

  background-color: ${(props) =>
    props.isHome ? 'var(--red)' : 'var(--primary)'};
    
  cursor: pointer;
  position: relative;
  >img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  
`;
