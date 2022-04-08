import React from 'react';
import styles from './Door.module.scss';
import { useNavigate } from 'react-router-dom';
import image from './door.png';

type Props = {
  left: string;
  top: string;
  to?: string;
};

export const Door = ({ left, top, to }: Props) => {
  const navigate = useNavigate();
  return (
    <img
      className={styles.objects}
      src={image}
      alt="Door"
      style={{ left, top }}
      onClick={() => (to ? navigate(to) : {})}
    />
  );
};
