/* eslint-disable no-console */
import React from 'react';
import classNames from 'classnames';
import styles from './Hall.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

export const Hall = () => {
  const navigate = useNavigate();
  const objects = [
    {
      name: 'wallpaper',
      src: '/img/objects/wall/WallPaper.png',
      className: styles.objects__wallpaper,
      position: { left: '50.5%', top: '16%' },
    },
    {
      name: 'wallpaper2',
      src: '/img/objects/wall/WallPaper.png',
      className: styles.objects__wallpaper,
      position: { left: '63%', top: '25%' },
    },
    {
      name: 'wallpaper3',
      src: '/img/objects/wall/WallPaper.png',
      className: styles.objects__wallpaper,
      position: { left: '75.5%', top: '34.5%' },
    },
    {
      name: 'doorTo19',
      src: '/img/objects/wall/Door.png',
      className: styles.objects__door,
      position: { left: '44.2%', top: '12.3%' },
      onClick: () => navigate('/20'),
    },
    {
      name: 'doorTo20',
      src: '/img/objects/wall/Door.png',
      className: styles.objects__door,
      position: { left: '88%', top: '45%' },
    },
    {
      name: 'plat5',
      src: '/img/objects/wall/Plat.png',
      className: styles.objects__plat,
      position: { left: '21.2%', top: '42.2%' },
    },
    {
      name: 'plat4',
      src: '/img/objects/wall/Plat.png',
      className: styles.objects__plat,
      position: { left: '35%', top: '53%' },
    },
    {
      name: 'plat3',
      src: '/img/objects/wall/Plat.png',
      className: styles.objects__plat,
      position: { left: '50%', top: '64%' },
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        {objects.map((item) => (
          <img
            src={item.src}
            alt={item.name}
            key={item.name}
            className={cx(styles.objects, item.className)}
            style={{ left: item.position.left, top: item.position.top }}
            onClick={item.onClick ? () => item.onClick() : () => {}}
          />
        ))}
      </div>
    </div>
  );
};
