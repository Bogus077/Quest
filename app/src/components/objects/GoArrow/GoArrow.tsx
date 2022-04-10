import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ObjectPreloader } from '../../UI/ObjectPreloader';
import styles from './GoArrow.module.scss';
import image from './goArrow.png';

type Props = {
  left: string;
  top: string;
  to?: string;
};

export const GoArrow = ({ left, top, to }: Props) => {
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
        className={styles.objects}
        src={image}
        alt="WallPaper"
        style={{ left, top, opacity: isLoading ? 0 : 1 }}
        onClick={() => (to ? navigate(to) : {})}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
