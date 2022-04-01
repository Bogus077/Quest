import React from 'react';
import { useParams } from 'react-router-dom';
import { CompClass } from '../../components/rooms/secondFloor/CompClass';
import { Hall } from '../../components/rooms/secondFloor/hall';

export const TestPage = () => {
  const roomId = useParams().roomId;

  switch (roomId) {
    case '20':
      return <CompClass />;
    default:
      return <Hall />;
  }
};
