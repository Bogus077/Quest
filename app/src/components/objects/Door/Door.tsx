import React, { useState } from 'react';
import styles from './Door.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import image from './door.png';
import { ObjectPreloader } from '../../UI/ObjectPreloader';
const cx = classNames.bind(styles);

type Props = {
  left: string;
  top: string;
  to?: string;
  mirrored?: boolean;
};

export const Door = ({ left, top, to, mirrored }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      {isLoading && (
        <div style={{ left, top, position: 'absolute' }}>
          <ObjectPreloader />
        </div>
      )}
      <img
        className={cx(styles.objects, { mirrored: mirrored })}
        src={image}
        alt="Door"
        style={{ left, top, opacity: isLoading ? 0 : 1 }}
        onClick={() => (to ? navigate(to) : {})}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
