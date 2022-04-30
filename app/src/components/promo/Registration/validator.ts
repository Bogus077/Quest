import { number, object, ref, string } from 'yup';

export const loginValidationSchema = object({
  phone: number()
    .typeError('Номер должен состоять только из цифр')
    .required('Поле не заполнено'),
});

export const nameValidationSchema = object({
  name: string().required('Поле не заполнено'),
  lastName: string().required('Поле не заполнено'),
});

export const passwordValidationSchema = object({
  password: string()
    .min(6, 'Пароль не может быть короче 6 символов')
    .required('Поле не заполнено'),
  passwordConfirm: string()
    .oneOf([ref('password'), null], 'Пароли не совпадают')
    .required('Поле не заполнено'),
});
