import * as Yup from 'yup';
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = () =>
  Yup.object().shape({
    fullName: Yup.string()
      .required('Your full name is required')
      .matches(/^[^\d]*$/, 'Please provide correct name'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .min(9, 'Number is too short')
      .max(9, 'Number is too long'),
    subject: Yup.string().min(3, 'Subject is too short').max(50, 'Subject is too long'),
    message: Yup.string()
      .min(3, 'Message is too short')
      .max(250, 'Message is too long')
      .required('Message is required'),
  });

export default validationSchema;
