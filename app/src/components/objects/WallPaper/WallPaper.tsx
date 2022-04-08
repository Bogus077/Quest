import React from 'react';
import styles from './WallPaper.module.scss';
import image from './wallPaper.png';

type Props = {
  left: string;
  top: string;
};

export const WallPaper = ({ left, top }: Props) => {
  return (
    <img
      className={styles.objects}
      src={image}
      alt="WallPaper"
      style={{ left, top }}
    />
  );
};
