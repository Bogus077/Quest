import React, { ReactElement } from 'react';
import { Dialog } from '../UI/Dialog';
import styles from './Layout.module.scss';

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      {children}
      <Dialog />
    </div>
  );
};
