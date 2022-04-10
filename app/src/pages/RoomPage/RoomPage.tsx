import React from 'react';
import { useParams } from 'react-router-dom';
import { CompClass } from '../../components/rooms/secondFloor/CompClass';
import { Cab20 } from '../../components/rooms/secondFloor/Cab20';
import { Cab20a } from '../../components/rooms/secondFloor/Cab20a';
import { Hall } from '../../components/rooms/secondFloor/Hall';
import { HallRight } from '../../components/rooms/secondFloor/HallRight';
import { TeachersRoom } from '../../components/rooms/secondFloor/TeachersRoom';
import { Press } from '../../components/rooms/secondFloor/Press';
import { SportRoom } from '../../components/rooms/firstFloor/SportRoom';
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
    case roomLinks.hall2ndRight.id:
      return <HallRight />;
    case roomLinks.teachersRoom.id:
      return <TeachersRoom />;
    case roomLinks.press.id:
      return <Press />;
    case roomLinks.sportRoom.id:
      return <SportRoom />;
    default:
      return <Hall />;
  }
};
