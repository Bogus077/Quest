import React, { useState } from 'react';
import { ObjectPreloader } from '../../UI/ObjectPreloader';
import styles from './GreenDesk.module.scss';
import image from './greenDesk.png';

type Props = {
  left: string;
  top: string;
};

export const GreenDesk = ({ left, top }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      {isLoading && (
        <div style={{ left, top, position: 'absolute' }}>
          <ObjectPreloader />
        </div>
      )}
      <img
        className={styles.objects}
        src={image}
        alt="GreenDesk"
        style={{ left, top, opacity: isLoading ? 0 : 1 }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
