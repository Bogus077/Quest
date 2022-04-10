import React from 'react';
import styles from './ObjectPreloader.module.scss';

export const ObjectPreloader = ({ scale = '1' }: { scale?: string }) => {
  return (
    <div
      className={styles.loadingiospinnerellipsismi1ke4aftva}
      style={{ transform: `scale(${scale})` }}
    >
      <div className={styles.ldio34y1y1rh2xg}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
