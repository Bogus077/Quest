import React, { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../../redux';
import {
  getCompetitions,
  getCompetitionsThunk,
} from '../../../../redux/teamSlice';
import { CompetitionList } from '../../../competitions/CompetitionList';
import { Icon } from '../../Icon';
import { PopupTabs } from '../PopupTabs';
import styles from './CompetitionsPopup.module.scss';

type Props = {
  isPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CompetitionsPopup = ({ isPopupOpen }: Props) => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getCompetitionsThunk(''));
  }, [dispatch]);

  const competitions = useTypedSelector(getCompetitions);

  const tabs = [
    {
      header: 'Участвую',
      tab: <CompetitionList competitions={competitions} />,
    },
    {
      header: 'Доступные',
      tab: <CompetitionList competitions={competitions} />,
    },
  ];

  return (
    <div className={styles.popup}>
      <div className={styles.popup__close} onClick={() => isPopupOpen(false)}>
        <Icon icon="cross" />
      </div>
      <div className={styles.popup__header}>Соревнования</div>
      <PopupTabs tabs={tabs} />
    </div>
  );
};
