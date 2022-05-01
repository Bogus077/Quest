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
import { Layout } from '../../components/Layout';

export const RoomPage = () => {
  const roomId = useParams().roomId;
  let room = <Hall />;

  switch (roomId) {
    case roomLinks.compClass.id:
      room = <CompClass />;
      break;
    case roomLinks.cab20.id:
      room = <Cab20 />;
      break;
    case roomLinks.cab20a.id:
      room = <Cab20a />;
      break;
    case roomLinks.hall2ndRight.id:
      room = <HallRight />;
      break;
    case roomLinks.teachersRoom.id:
      room = <TeachersRoom />;
      break;
    case roomLinks.press.id:
      room = <Press />;
      break;
    case roomLinks.sportRoom.id:
      room = <SportRoom />;
      break;
    default:
      room = <Hall />;
  }

  return <Layout>{room}</Layout>;
};
