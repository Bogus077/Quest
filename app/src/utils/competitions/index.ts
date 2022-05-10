import { Competition } from '../../types/competitions';
import { IconTypes } from '../../types/icons';

export const getCompetitionSkills = (competition: Competition) => {
  const skills = [
    {
      name: 'Сила',
      skillLevel: competition.strength,
      icon: 'strength' as IconTypes,
    },
    {
      name: 'Ловкость',
      skillLevel: competition.agility,
      icon: 'agility' as IconTypes,
    },
    {
      name: 'Меткость',
      skillLevel: competition.accuracy,
      icon: 'accuracy' as IconTypes,
    },
    {
      name: 'Интеллект',
      skillLevel: competition.intellect,
      icon: 'intellect' as IconTypes,
    },
    {
      name: 'Скорость',
      skillLevel: competition.speed,
      icon: 'speed' as IconTypes,
    },
  ];

  return skills.sort((a, b) => a.skillLevel - b.skillLevel);
};
