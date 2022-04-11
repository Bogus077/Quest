import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
const cx = classNames.bind(styles);

type Props = {
  error?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
};

export const Input = ({ error, name, value, onChange, placeholder }: Props) => {
  return (
    <div className={cx('wrapper', { wrapper_error: error })}>
      <input
        type={
          name === 'password' ? 'password' : name === 'phone' ? 'tel' : 'text'
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <div className={styles.error}>{error}</div>
    </div>
  );
};
