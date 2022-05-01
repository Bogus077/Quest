import { Emotions } from '../../../types/dialogs';
import { makeWelcomeDialogDone } from '../../../redux/userSlice';

export const welcomeDialog = {
  onFinish: makeWelcomeDialogDone,
  dialog: [
    {
      phrase: 'Ну ты и соня! Тебя даже вчерашний шторм не разбудил.',
      emotion: 'regular' as Emotions,
    },
    {
      phrase: 'Стоп... Не та фраза. Что-то я задумался.',
      emotion: 'sad' as Emotions,
    },
    {
      phrase: 'Твой первый день в качестве интруктора, а ты дрыхнешь до обеда!',
      emotion: 'happy' as Emotions,
    },
    {
      phrase:
        'На тебя возложена обязанность подготовить команду к соревнованиям. И времени осталось совсем немного, так что давай перейдём к делу.',
      emotion: 'regular' as Emotions,
    },
    {
      phrase: 'Проблема в том, что команды у нас до сих пор нет...',
      emotion: 'sad' as Emotions,
    },
    {
      phrase:
        'А значит, надо начать с отбора кадет в твою первую команду! В этом холле на полу начерчены белые отметки для места построения взводов - нажми на любую из них и выбери подходящих ребят в свою команду.',
      emotion: 'regular' as Emotions,
    },
  ],
};
