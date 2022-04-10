import React, { useState } from 'react';
import { ObjectPreloader } from '../../UI/ObjectPreloader';
import styles from './ClassDesk.module.scss';
import image from './classDesk.png';

type Props = {
  left: string;
  top: string;
};

export const ClassDesk = ({ left, top }: Props) => {
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
        alt="ClassDesk"
        style={{ left, top, opacity: isLoading ? 0 : 1 }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
