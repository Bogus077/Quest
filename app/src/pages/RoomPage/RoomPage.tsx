import React from 'react';
import { useParams } from 'react-router-dom';
import { CompClass } from '../../components/rooms/secondFloor/CompClass';
import { Hall } from '../../components/rooms/secondFloor/Hall';
import { roomLinks } from '../../utils/roomLinks';

export const RoomPage = () => {
  const roomId = useParams().roomId;

  switch (roomId) {
    case roomLinks.compClass.id:
      return <CompClass />;
    default:
      return <Hall />;
  }
};
