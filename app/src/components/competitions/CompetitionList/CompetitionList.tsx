import React from 'react';
import { Competition } from '../../../types/competitions';
import { CompetitionCard } from '../CompetitionCard';
import styles from './CompetitionList.module.scss';

type Props = {
  competitions: Competition[];
};

export const CompetitionList = ({ competitions }: Props) => {
  return (
    <div className={styles.container}>
      {competitions.map((competition) => (
        <div className={styles.competition} key={competition.id}>
          <CompetitionCard competition={competition} />
        </div>
      ))}
    </div>
  );
};
