import React, { useEffect, useState } from 'react';
import { Input } from '../../UI/Input';
import { Formik } from 'formik';
import {
  loginValidationSchema,
  nameValidationSchema,
  passwordValidationSchema,
} from './validator';
import classNames from 'classnames/bind';
import { Button } from '../../UI/Button';
import styles from './Registration.module.scss';
import { Carousel } from '../Carousel';
import { getUserError, isAuthorized, signUp } from '../../../redux/userSlice';
import { useTypedDispatch, useTypedSelector } from '../../../redux';
import { useNavigate } from 'react-router-dom';
import { roomLinks } from '../../../utils/roomLinks';
const cx = classNames.bind(styles);

export const Registration = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const isUserAuthorized = useTypedSelector(isAuthorized);
  const authError = useTypedSelector(getUserError);

  const [step, setStep] = useState(0);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    lastName: '',
    phone: '',
    password: '',
  });
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  useEffect(() => {
    if (isUserAuthorized) navigate(roomLinks.hall2nd.link);
  }, [isUserAuthorized, navigate]);

  const handleSubmitStep1 = (values: { phone: string }) => {
    setRegistrationData({ ...registrationData, phone: values.phone });
    nextStep();
  };

  const handleSubmitStep2 = (values: { name: string; lastName: string }) => {
    setRegistrationData({
      ...registrationData,
      name: values.name,
      lastName: values.lastName,
    });
    nextStep();
  };

  const handleSubmitStep3 = (values: {
    password: string;
    passwordConfirm: string;
  }) => {
    setRegistrationData({
      ...registrationData,
      password: values.password,
    });
    nextStep();
  };

  const sendForm = () => {
    dispatch(signUp(registrationData));
  };

  const step1 = (
    <Formik
      initialValues={{ phone: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmitStep1}
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
          <div onClick={formik.submitForm} className={styles.buttons}>
            <Button label="??????????" />
          </div>
        </form>
      )}
    </Formik>
  );

  const step2 = (
    <Formik
      initialValues={{ name: '', lastName: '' }}
      validationSchema={nameValidationSchema}
      onSubmit={handleSubmitStep2}
    >
      {(formik) => (
        <form className={cx('form', 'form__password')}>
          <Input
            error={formik.errors.name}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="??????"
          />
          <Input
            error={formik.errors.lastName}
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder="??????????????"
          />
          <div className={styles.buttons}>
            <div className={styles.buttons__back} onClick={prevStep}>
              <Button label="??????????" />
            </div>
            <div onClick={formik.submitForm}>
              <Button label="??????????" />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );

  const step3 = (
    <Formik
      initialValues={{ password: '', passwordConfirm: '' }}
      validationSchema={passwordValidationSchema}
      onSubmit={handleSubmitStep3}
    >
      {(formik) => (
        <form className={cx('form', 'form__password')}>
          <Input
            error={formik.errors.password && authError}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="?????????????? ????????????"
          />
          <Input
            error={formik.errors.passwordConfirm}
            name="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            placeholder="??????????????????"
          />
          <div className={styles.buttons}>
            <div className={styles.buttons__back} onClick={prevStep}>
              <Button label="??????????" />
            </div>
            <div onClick={formik.submitForm}>
              <Button label="??????????????????" />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );

  const step4 = (
    <div className={styles.submitData}>
      <div className={styles.submitData__row}>
        <span className={styles.submitData__name}>??????:</span>
        <span>{registrationData.name}</span>
      </div>
      <div className={styles.submitData__row}>
        <span className={styles.submitData__name}>??????????????:</span>
        <span>{registrationData.lastName}</span>
      </div>
      <div className={styles.submitData__row}>
        <span className={styles.submitData__name}>??????????????:</span>
        <span>{registrationData.phone}</span>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttons__back} onClick={prevStep}>
          <Button label="??????????" />
        </div>
        <div onClick={sendForm}>
          <Button label="??????????????????????" />
        </div>
      </div>
    </div>
  );

  const elements = [step1, step2, step3, step4];

  return (
    <div className={styles.wrapper}>
      <Carousel stepElements={elements} step={step} />
    </div>
  );
};
