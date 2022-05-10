import React from 'react';
import { Competition } from '../../../types/competitions';
import { getCompetitionSkills } from '../../../utils/competitions';
import { getTimeLeft } from '../../../utils/date';
import { Icon } from '../../UI/Icon';
import styles from './CompetitionCard.module.scss';

type Props = {
  competition: Competition;
};

export const CompetitionCard = ({ competition }: Props) => {
  const skills = getCompetitionSkills(competition);
  const timeLeft = getTimeLeft(competition.dateStart);

  return (
    <div className={styles.container}>
      <div className={styles.date}>{timeLeft}</div>
      <div className={styles.title}>{competition.title}</div>
      <div className={styles.tags}>
        {skills
          .filter((skill) => skill.skillLevel !== 0)
          .map((skill) => (
            <div key={skill.name} className={styles.tags__item}>
              <Icon icon={skill.icon} />
              <span>{skill.name}</span>
            </div>
          ))}
      </div>
      <div className={styles.size}>
        <Icon icon="earth" />
        <span>Район [нет других кадетских корпусов]</span>
      </div>
    </div>
  );
};
