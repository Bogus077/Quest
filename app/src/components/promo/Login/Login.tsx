import React, { useEffect, useState } from 'react';
import { Input } from '../../UI/Input';
import { Formik } from 'formik';
import { loginValidationSchema, passwordValidationSchema } from './validator';
import classNames from 'classnames/bind';
import { Button } from '../../UI/Button';
import styles from './Login.module.scss';
import { Carousel } from '../Carousel';
import { useTypedDispatch, useTypedSelector } from '../../../redux';
import {
  clearErrors,
  getUserError,
  isAuthorized,
  logIn,
} from '../../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { roomLinks } from '../../../utils/roomLinks';
const cx = classNames.bind(styles);

export const Login = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const isUserAuthorized = useTypedSelector(isAuthorized);
  const authError = useTypedSelector(getUserError);

  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState('');
  const nextStep = () => setStep((prevState) => prevState + 1);

  useEffect(() => {
    if (isUserAuthorized) navigate(roomLinks.hall2nd.link);
  }, [isUserAuthorized, navigate]);

  const handleSubmit = (values: { phone: string }) => {
    setPhone(values.phone);
    nextStep();
  };

  const handleSubmitStep2 = (values: { password: string }) => {
    dispatch(logIn({ phone, password: values.password }));
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
      initialValues={{ password: '' }}
      validationSchema={passwordValidationSchema}
      onSubmit={handleSubmitStep2}
    >
      {(formik) => (
        <form className={cx('form', 'form__password')}>
          <Input
            error={formik.errors.password || authError}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Введите пароль"
          />
          <div onClick={formik.submitForm}>
            <Button label="Войти" />
          </div>

          {authError && (
            <div
              onClick={() => {
                dispatch(clearErrors());
                navigate('/room');
              }}
            >
              <Button label="Попробовать ещё раз" />
            </div>
          )}
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
