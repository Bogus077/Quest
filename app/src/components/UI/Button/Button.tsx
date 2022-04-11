import React from 'react';
import styles from './Button.module.scss';

type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return <div className={styles.button}>{label}</div>;
};
