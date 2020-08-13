import React from 'react';

import { Button } from './styles';

export interface Props{
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;

}
const imgNath = 'https://media-exp1.licdn.com/dms/image/C4E03AQF4bFJeBPATuw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=h-QYOqKw2VNFWQJZidCHjZLmeIqBTopgsmjwWq2gzWc';
const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions

}) =>{
  return (
  <Button>
   
    className={selected ?'active': ''}
    isHome= {isHome}
    hasNotifications= {hasNotifications}
    mentions= {mentions}

    {isHome && <img src = {imgNath} alt='Server name' ></img> }
  </Button>
  )
}


export default ServerButton;