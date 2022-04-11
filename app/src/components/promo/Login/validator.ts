import { number, object, string } from 'yup';

export const loginValidationSchema = object({
  phone: number()
    .typeError('Номер должен состоять только из цифр')
    .required('Поле не заполнено'),
});

export const passwordValidationSchema = object({
  password: string()
    .min(6, 'Пароль не может быть короче 6 символов')
    .required('Поле не заполнено'),
});
