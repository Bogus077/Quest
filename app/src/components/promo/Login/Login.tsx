import React, { useState } from 'react';
import { Input } from '../../UI/Input';
import { Formik } from 'formik';
import { loginValidationSchema, passwordValidationSchema } from './validator';
import classNames from 'classnames/bind';
import { Button } from '../../UI/Button';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

export const Login = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (values: { phone: string }) => {
    // eslint-disable-next-line no-console
    console.log(values);
    setStep(2);
  };

  const handleSubmitStep2 = (values: { password: string }) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{ phone: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form
            className={cx('form', 'form__phone', {
              form__phone_hidden: step === 2,
            })}
          >
            <Input
              error={formik.errors.phone}
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="+7 (___) ___ __ __"
            />
            <div onClick={formik.submitForm}>
              <Button label="Далее" />
            </div>
          </form>
        )}
      </Formik>

      <Formik
        initialValues={{ password: '' }}
        validationSchema={passwordValidationSchema}
        onSubmit={handleSubmitStep2}
      >
        {(formik) => (
          <form
            className={cx('form', 'form__password', {
              form__password_active: step === 2,
            })}
          >
            <Input
              error={formik.errors.password}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Введите пароль"
            />
            <div onClick={formik.submitForm}>
              <Button label="Войти" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
