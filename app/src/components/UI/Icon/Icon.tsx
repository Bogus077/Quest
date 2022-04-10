import React from 'react';
import { GoArrowIcon } from './Icons/GoArrow';

type Props = {
  icon: 'goArrow';
};

export const Icon = ({ icon }: Props) => {
  switch (icon) {
    case 'goArrow':
      return <GoArrowIcon />;
    default:
      return <></>;
  }
};
