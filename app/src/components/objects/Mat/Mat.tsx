import React, { useState } from 'react';
import { ObjectPreloader } from '../../UI/ObjectPreloader';
import styles from './Mat.module.scss';
import image from './mat.png';
import imageBlue from './matBlue.png';

type Props = {
  left: string;
  top: string;
  blue?: boolean;
};

export const Mat = ({ left, top, blue }: Props) => {
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
        src={blue ? imageBlue : image}
        alt="GreenDesk"
        style={{ left, top, opacity: isLoading ? 0 : 1 }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
