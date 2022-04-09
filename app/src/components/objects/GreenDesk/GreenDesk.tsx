import React from 'react';
import styles from './GreenDesk.module.scss';
import image from './greenDesk.png';

type Props = {
  left: string;
  top: string;
};

export const GreenDesk = ({ left, top }: Props) => {
  return (
    <img
      className={styles.objects}
      src={image}
      alt="GreenDesk"
      style={{ left, top }}
    />
  );
};
