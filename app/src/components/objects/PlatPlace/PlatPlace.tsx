import React from 'react';
import styles from './PlatPlace.module.scss';
import image from './plat.png';

type Props = {
  left: string;
  top: string;
};

export const PlatPlace = ({ left, top }: Props) => {
  return (
    <img
      className={styles.objects}
      src={image}
      alt="WallPaper"
      style={{ left, top }}
    />
  );
};
