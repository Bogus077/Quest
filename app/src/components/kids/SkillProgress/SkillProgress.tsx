import React from 'react';
import classNames from 'classnames/bind';
import styles from './SkillProgress.module.scss';
const cx = classNames.bind(styles);

type Props = {
  value: number;
};

export const SkillProgress = ({ value }: Props) => {
  const progress = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.progress}>
      {progress.map((item) => (
        <div
          key={item}
          className={cx('progress__item', {
            progress__item_active: item <= value,
          })}
        />
      ))}
    </div>
  );
};
