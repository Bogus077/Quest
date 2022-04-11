import React from 'react';
import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import { Login } from '../Login';
const cx = classNames.bind(styles);

type Props = {
  color: string;
  header: string;
  longDescription: string;
  description: string;
  id: number;
  currentItem: number;
  setCurrentItemActive: React.Dispatch<React.SetStateAction<number>>;
};

export const MenuItem = ({
  color,
  header,
  longDescription,
  description,
  id,
  currentItem,
  setCurrentItemActive,
}: Props) => {
  const expanded = id === currentItem;
  const hidden = !expanded && currentItem !== -1;

  return (
    <div
      className={cx('wrapper', {
        wrapper_expanded: expanded,
        wrapper_hidden: hidden,
      })}
      style={{ backgroundColor: color }}
      onClick={() => setCurrentItemActive(id)}
    >
      {expanded && id === 1 && (
        <div className={styles.expandedItem}>
          <Login />
        </div>
      )}

      <div
        className={cx('text', { text_hidden: hidden, text_expanded: expanded })}
      >
        <div className={cx('header', { header_hidden: hidden })}>{header}</div>
        <div
          className={cx('longDescription', { longDescription_hidden: hidden })}
        >
          {longDescription}
        </div>
        <div className={cx('description', { description_hidden: hidden })}>
          {description}
        </div>
      </div>
    </div>
  );
};
