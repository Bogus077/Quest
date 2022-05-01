import React, { ReactElement } from 'react';
import styles from './Popup.module.scss';
import { Portal } from '../Portal';

export type PopupTypes = {
  children: ReactElement;
  isPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpened?: boolean;
  popupWindowRef?: React.MutableRefObject<HTMLDivElement>;
};

export const Popup = (props: PopupTypes) => {
  const { children, isPopupOpen, isOpened, popupWindowRef } = props;

  return isOpened ? (
    <Portal>
      <div className={styles.popup} ref={popupWindowRef}>
        <div
          className={styles.popup__overlay}
          onClick={() => isPopupOpen(false)}
        />
        <div className={styles.popup__content}>{children}</div>
      </div>
    </Portal>
  ) : (
    <></>
  );
};
