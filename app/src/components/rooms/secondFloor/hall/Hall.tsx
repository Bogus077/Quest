/* eslint-disable no-console */
import React from 'react';
import classNames from 'classnames';
import styles from './Hall.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

export const Hall = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div
          className={cx(styles.room, styles.room__door1)}
          onClick={() => navigate('/20')}
        >
          door1
        </div>

        <div
          className={cx(styles.room, styles.room__door2)}
          onClick={() => console.log('door2')}
        >
          door2
        </div>

        <div
          className={cx(styles.room, styles.room__wallpaper1)}
          onClick={() => console.log('wallpaper1')}
        >
          wallpaper1
        </div>

        <div
          className={cx(styles.room, styles.room__wallpaper2)}
          onClick={() => console.log('wallpaper2')}
        >
          wallpaper2
        </div>

        <div
          className={cx(styles.room, styles.room__wallpaper3)}
          onClick={() => console.log('wallpaper3')}
        >
          wallpaper3
        </div>

        <div
          className={cx(styles.room, styles.room__plat1)}
          onClick={() => console.log('plat1')}
        >
          plat1
        </div>

        <div
          className={cx(styles.room, styles.room__plat2)}
          onClick={() => console.log('plat2')}
        >
          plat2
        </div>

        <div
          className={cx(styles.room, styles.room__plat3)}
          onClick={() => console.log('plat3')}
        >
          plat3
        </div>
      </div>
    </div>
  );
};
