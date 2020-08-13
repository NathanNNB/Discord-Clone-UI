import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';
const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton/>

      <Separator/>
      
      <ServerButton/>
      <ServerButton/>
      <ServerButton />
      <ServerButton/>
      <ServerButton mentions={3}/>
      <ServerButton mentions={25}/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton />
      <ServerButton/>
      <ServerButton mentions={10}/>



    </Container>
  );
}

export default ServerList;