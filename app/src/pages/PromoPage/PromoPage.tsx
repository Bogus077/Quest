import React, { useState } from 'react';
import { MenuItem } from '../../components/promo/MenuItem';
import styles from './PromoPage.module.scss';

export const PromoPage = () => {
  const [currentItem, setCurrentItem] = useState(-1);
  const menu = [
    {
      color: '#AA83FF',
      header: 'Об игре',
      longDescription:
        'Соревновательная онлайн игра в знакомых и почти родных локациях.',
      description: 'Что это за сайт, и какова его цель?',
    },
    {
      color: '#F16D41',
      header: 'Войти в игру',
      longDescription: 'Возвращайся, мы тебя заждались! Победи их всех!',
      description: 'Для тех, у кого уже есть аккаунт',
    },
    {
      color: '#95B6F7',
      header: 'Регистрация',
      longDescription: 'Дай знать, как тебя зовут, и добро пожаловать в Семью!',
      description: 'Для тех, кто хочет начать играть',
    },
  ];
  return (
    <div className={styles.wrapper}>
      {menu.map((item, i) => (
        <MenuItem
          key={i}
          id={i}
          color={item.color}
          header={item.header}
          longDescription={item.longDescription}
          description={item.description}
          currentItem={currentItem}
          setCurrentItemActive={setCurrentItem}
        />
      ))}
    </div>
  );
};
