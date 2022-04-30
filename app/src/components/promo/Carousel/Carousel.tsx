import React, { ReactElement } from 'react';
import styles from './Carousel.module.scss';

type Props = {
  stepElements: ReactElement[];
  step: number;
};

export const Carousel = ({ stepElements, step }: Props) => {
  const style = { transform: `translateX(-${100 * step}%)` };
  return (
    <div className={styles.wrapper}>
      {stepElements.map((item, i) => (
        <div key={i} className={styles.item} style={style}>
          {item}
        </div>
      ))}
    </div>
  );
};
