import React from 'react';
import { MenuItem } from '../../components/promo/MenuItem';
import styles from './PromoPage.module.scss';

export const PromoPage = () => {
  return (
    <div className={styles.wrapper}>
      <MenuItem
        color="#AA83FF"
        header="Об игре"
        description="Что это за сайт, и какова его цель?"
      />
      <MenuItem
        color="#F16D41"
        header="Войти в игру"
        description="Для тех, у кого уже есть аккаунт"
      />{' '}
      <MenuItem
        color="#95B6F7"
        header="Регистрация"
        description="Для тех, кто хочет начать играть"
      />
    </div>
  );
};
