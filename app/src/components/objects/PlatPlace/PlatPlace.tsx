import React, { useState } from 'react';
import styles from './PlatPlace.module.scss';
import image from './plat.png';
import { ObjectPreloader } from '../../UI/ObjectPreloader';

type Props = {
  left: string;
  top: string;
};

export const PlatPlace = ({ left, top }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
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
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
