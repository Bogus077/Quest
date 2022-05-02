import { ChartTypes } from '../../../../../types/charts';

export const kid1 = {
  name: 'Сидоров Сидор',
  position: 'кадет',
  strength: 1,
  agility: 2,
  accuracy: 3,
  intellect: 3,
  speed: 2,
};

export const kid2 = {
  name: 'Вася Пупкин',
  position: 'сержант',
  strength: 6,
  agility: 3,
  accuracy: 2,
  intellect: 1,
  speed: 3,
};

export const chart1 = {
  type: 'numberChart' as ChartTypes,
  header: 'Общая стастистика',
  data: [
    { x: 'Всего соревнований', y: 7, color: '#ff6633' },
    { x: 'Человек в команде', y: 2, color: '#45B1D9' },
    { x: 'Мораль команды', y: 2, color: '#AA83FF' },
  ],
};

export const chart2 = {
  type: 'emptyPie' as ChartTypes,
  header: 'Процент побед',
  data: [
    { x: 'Победа', y: 5, color: '#ff6633' },
    { x: 'Поражение', y: 2, color: '#45B1D9' },
  ],
};

export const chart3 = {
  type: 'polar' as ChartTypes,
  header: 'Специализация',
  data: [
    { x: 'Сил', y: 5, color: '#ff6633' },
    { x: 'Лов', y: 2, color: '#45B1D9' },
    { x: 'Мет', y: 2, color: '#3760A0' },
    { x: 'Инт', y: 2, color: '#FFAC0D' },
    { x: 'Скор', y: 2, color: '#45B1D9' },
  ],
};

export const chart4 = {
  type: 'line' as ChartTypes,
  header: 'Мораль',
  data: [
    { x: '29 апр', y: 5, color: '#ff6633' },
    { x: '30 апр', y: 2, color: '#45B1D9' },
    { x: '1 мая', y: 4, color: '#3760A0' },
    { x: '2 мая', y: 8, color: '#FFAC0D' },
    { x: '3 мая', y: 2, color: '#45B1D9' },
  ],
};
