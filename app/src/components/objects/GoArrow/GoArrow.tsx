import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ObjectPreloader } from '../../UI/ObjectPreloader';
import classNames from 'classnames/bind';
import styles from './GoArrow.module.scss';
import image from './goArrow.png';
const cx = classNames.bind(styles);

type Props = {
  left: string;
  top: string;
  to?: string;
  mirrored?: boolean;
};

export const GoArrow = ({ left, top, to, mirrored }: Props) => {
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
        alt="WallPaper"
        style={{ left, top, opacity: isLoading ? 0 : 1 }}
        onClick={() => (to ? navigate(to) : {})}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
