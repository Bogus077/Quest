import React, { useState } from 'react';
import { Input } from '../../UI/Input';
import { Formik } from 'formik';
import { loginValidationSchema, passwordValidationSchema } from './validator';
import classNames from 'classnames/bind';
import { Button } from '../../UI/Button';
import styles from './Registration.module.scss';
import { Carousel } from '../Carousel';
const cx = classNames.bind(styles);

export const Registration = () => {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prevState) => prevState + 1);

  const handleSubmit = (values: { phone: string }) => {
    // eslint-disable-next-line no-console
    console.log(values);
    nextStep();
  };

  const handleSubmitStep2 = (values: {
    password: string;
    passwordConfirm: string;
  }) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const step1 = (
    <Formik
      initialValues={{ phone: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <form className={cx('form', 'form__phone')}>
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
  );

  const step2 = (
    <Formik
      initialValues={{ password: '', passwordConfirm: '' }}
      validationSchema={passwordValidationSchema}
      onSubmit={handleSubmitStep2}
    >
      {(formik) => (
        <form className={cx('form', 'form__password')}>
          <Input
            error={formik.errors.password}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Введите пароль"
          />
          <Input
            error={formik.errors.passwordConfirm}
            name="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            placeholder="Повторите"
          />
          <div onClick={formik.submitForm}>
            <Button label="Войти" />
          </div>
        </form>
      )}
    </Formik>
  );

  const elements = [step1, step2];

  return (
    <div className={styles.wrapper}>
      <Carousel stepElements={elements} step={step} />
    </div>
  );
};
