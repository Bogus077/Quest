import React from 'react';
import { Icon } from '../../Icon';
import { PopupTabs } from '../PopupTabs';
import { AddKidList } from './AddKidList';
import styles from './TeamPopup.module.scss';

type Props = {
  isPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TeamPopup = ({ isPopupOpen }: Props) => {
  const tabs = [
    { header: 'Набор в команду', tab: <AddKidList /> },
    { header: 'Управление', tab: <>TAB 2</> },
  ];

  return (
    <div className={styles.popup}>
      <div className={styles.popup__close} onClick={() => isPopupOpen(false)}>
        <Icon icon="cross" />
      </div>
      <div className={styles.popup__header}>Команда</div>
      <PopupTabs tabs={tabs} />
    </div>
  );
};
