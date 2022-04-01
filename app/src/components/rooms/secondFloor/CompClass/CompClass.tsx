/* eslint-disable no-console */
import React from 'react';
import classNames from 'classnames';
import styles from './CompClass.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

export const CompClass = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div
          className={cx(styles.room, styles.room__door1)}
          onClick={() => navigate('/')}
        >
          door1
        </div>
      </div>
    </div>
  );
};
