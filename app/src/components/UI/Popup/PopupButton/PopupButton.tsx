import React from 'react';
import { IconTypes } from '../../../../types/icons';
import { Icon } from '../../Icon/Icon';
import styles from './PopupButton.module.scss';

type Props = {
  label: string;
  icon: IconTypes;
};

export const PopupButton = ({ label, icon }: Props) => {
  return (
    <div className={styles.button}>
      {icon && (
        <div className={styles.button__icon}>
          <Icon icon={icon} />
        </div>
      )}
      <span>{label}</span>
    </div>
  );
};
