import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../../../redux';
import {
  addKidToTeamThunk,
  getAvailableKids,
  getAvailableKidsThunk,
} from '../../../../../redux/teamSlice';
import { KidCard } from '../../../../kids/KidCard';
import styles from './AddKidList.module.scss';

export const AddKidList = () => {
  const availableKids = useTypedSelector(getAvailableKids);
  const dispatch = useTypedDispatch();

  const handleAdd = async (id: number) => {
    await dispatch(addKidToTeamThunk({ id }));
    await dispatch(getAvailableKidsThunk(''));
  };

  return (
    <div className={styles.list}>
      {availableKids.map((kid) => (
        <div key={kid.id} className={styles.list__item}>
          <KidCard
            kid={kid}
            buttonText="ВЗЯТЬ В КОМАНДУ"
            buttonIcon="check"
            onButtonClick={() => handleAdd(kid.id)}
          />
        </div>
      ))}
    </div>
  );
};
