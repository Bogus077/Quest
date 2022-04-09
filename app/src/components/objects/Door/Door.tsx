import React from 'react';
import styles from './Door.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import image from './door.png';
const cx = classNames.bind(styles);

type Props = {
  left: string;
  top: string;
  to?: string;
  mirrored?: boolean;
};

export const Door = ({ left, top, to, mirrored }: Props) => {
  const navigate = useNavigate();
  return (
    <img
      className={cx(styles.objects, { mirrored: mirrored })}
      src={image}
      alt="Door"
      style={{ left, top }}
      onClick={() => (to ? navigate(to) : {})}
    />
  );
};
