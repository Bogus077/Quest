import React from 'react';
import styles from './MenuItem.module.scss';

type Props = {
  color: string;
  header: string;
  description: string;
};

export const MenuItem = ({ color, header, description }: Props) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      <div className={styles.text}>
        <div className={styles.header}>{header}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
