import React, { useState } from 'react';
import { ObjectPreloader } from '../../UI/ObjectPreloader';
import styles from './ComputerDesk.module.scss';
import image from './computerDesk.png';

type Props = {
  left: string;
  top: string;
};

export const ComputerDesk = ({ left, top }: Props) => {
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
