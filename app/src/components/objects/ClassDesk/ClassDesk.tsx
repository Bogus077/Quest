import React from 'react';
import styles from './ClassDesk.module.scss';
import image from './classDesk.png';

type Props = {
  left: string;
  top: string;
};

export const ClassDesk = ({ left, top }: Props) => {
  return (
    <img
      className={styles.objects}
      src={image}
      alt="ClassDesk"
      style={{ left, top }}
    />
  );
};
