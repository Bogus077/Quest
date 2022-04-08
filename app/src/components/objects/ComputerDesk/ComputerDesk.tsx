import React from 'react';
import styles from './ComputerDesk.module.scss';
import image from './computerDesk.png';

type Props = {
  left: string;
  top: string;
};

export const ComputerDesk = ({ left, top }: Props) => {
  return (
    <img
      className={styles.objects}
      src={image}
      alt="WallPaper"
      style={{ left, top }}
    />
  );
};
