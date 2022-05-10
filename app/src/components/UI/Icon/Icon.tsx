import React from 'react';
import { GoArrowIcon } from './Icons/GoArrow';
import { SvgCrossIcon } from './Icons/cross';
import { SvgIntellectIcon } from './Icons/intellect';
import { SvgAccuracyIcon } from './Icons/accuracy';
import { SvgSpeedIcon } from './Icons/speed';
import { SvgAgilityIcon } from './Icons/agility';
import { SvgStrengthIcon } from './Icons/strength';
import { SvgCheckIcon } from './Icons/check';
import { IconTypes } from '../../../types/icons';
import { SvgEarthIcon } from './Icons/earth';

export type Props = {
  icon: IconTypes;
};

export const Icon = ({ icon }: Props) => {
  switch (icon) {
    case 'goArrow':
      return <GoArrowIcon />;
    case 'cross':
      return <SvgCrossIcon />;
    case 'intellect':
      return <SvgIntellectIcon />;
    case 'accuracy':
      return <SvgAccuracyIcon />;
    case 'speed':
      return <SvgSpeedIcon />;
    case 'agility':
      return <SvgAgilityIcon />;
    case 'strength':
      return <SvgStrengthIcon />;
    case 'check':
      return <SvgCheckIcon />;
    case 'earth':
      return <SvgEarthIcon />;
    default:
      return <></>;
  }
};
