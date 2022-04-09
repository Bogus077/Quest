import React from 'react';
import { useParams } from 'react-router-dom';
import { CompClass } from '../../components/rooms/secondFloor/CompClass';
import { Cab20 } from '../../components/rooms/secondFloor/Cab20';
import { Cab20a } from '../../components/rooms/secondFloor/Cab20a';
import { Hall } from '../../components/rooms/secondFloor/Hall';
import { roomLinks } from '../../utils/roomLinks';

export const RoomPage = () => {
  const roomId = useParams().roomId;

  switch (roomId) {
    case roomLinks.compClass.id:
      return <CompClass />;
    case roomLinks.cab20.id:
      return <Cab20 />;
    case roomLinks.cab20a.id:
      return <Cab20a />;
    default:
      return <Hall />;
  }
};
