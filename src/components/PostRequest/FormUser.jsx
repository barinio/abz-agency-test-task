import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonStuled,
  ContainerUserInfo,
  ErrorMessage,
  FormButtonWrapper,
  FormInput,
  FormInputWrapper,
  InputHidden,
  LabelSpan,
  ListRadioLabel,
  PositionContainer,
  RadioLabel,
  TitlePositionContainer,
  UploadButton,
  UploadLabel,
} from './PostRequest.styled';
import { postitions } from './positions';
import icons from '../../images/icons.svg';

const phoneRegExp = /^\+380\d{9}$/;
// const phoneRegExp = /^\+38 \(\d{3}\) \d{3} - \d{2} - \d{2}$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const FormUser = () => {
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, 'User name must be at least 2 characters')
      .max(64, 'User name must be at most 64 characters')
      .required('User name is required'),
    email: Yup.string()
      .required('Email is required')
      .matches(emailRegExp, 'Invalid email address'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(phoneRegExp, '+38 (XXX) XXX - XX - XX'),
    position: Yup.string().required('Position is required'),
    photo: Yup.mixed()
      .required('Photo is required')
      .test('fileSize', 'File size is too large', value => {
        return value && value.size <= 1048576;
      }),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      phone: '',
      position: '',
      photo: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {/* <FormWrapper> */}
        <ContainerUserInfo>
          <FormInputWrapper>
            <FormInput
              type="text"
              name="userName"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              style={{
                color:
                  formik.touched.userName && formik.errors.userName
                    ? 'red'
                    : '#7E7E7E',
              }}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <ErrorMessage>{formik.errors.userName}</ErrorMessage>
            ) : null}
          </FormInputWrapper>
          <FormInputWrapper>
            <FormInput
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              style={{
                color:
                  formik.touched.email && formik.errors.email
                    ? 'red'
                    : '#7E7E7E',
              }}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}
          </FormInputWrapper>
          <FormInputWrapper>
            <FormInput
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              style={{
                color:
                  formik.touched.phone && formik.errors.phone
                    ? 'red'
                    : '#7E7E7E',
              }}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <ErrorMessage>{formik.errors.phone}</ErrorMessage>
            ) : (
              <ErrorMessage>+38 (XXX) XXX - XX - XX</ErrorMessage>
            )}
          </FormInputWrapper>
        </ContainerUserInfo>

        <PositionContainer>
          <TitlePositionContainer>Select your position</TitlePositionContainer>
          <ListRadioLabel>
            {postitions.map(({ value }) => (
              <RadioLabel key={value}>
                <InputHidden
                  type="radio"
                  id={value}
                  name="position"
                  value={value}
                  checked={formik.values.position === value}
                  onChange={() => formik.setFieldValue('position', value)}
                />
                <label htmlFor={value}>
                  <svg width="20" height="20">
                    <use href={icons + '#icon-checkbox'}></use>
                  </svg>
                  {value}
                </label>
              </RadioLabel>
            ))}
            {formik.touched.position && formik.errors.position ? (
              <ErrorMessage>{formik.errors.position}</ErrorMessage>
            ) : null}
          </ListRadioLabel>
        </PositionContainer>

        <div className="photo-upload-wrapper">
          <UploadLabel htmlFor="photo">
            <input
              id="photo"
              name="photo"
              type="file"
              onChange={event => {
                formik.setFieldValue('photo', event.currentTarget.files[0]);
              }}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <UploadButton>Upload</UploadButton>
            <LabelSpan>
              {formik.values.photo !== ''
                ? formik.values.photo.name
                : 'Upload your photo'}
            </LabelSpan>
          </UploadLabel>
        </div>
        <FormButtonWrapper>
          <ButtonStuled
            type="submit"
            disabled={!formik.values.photo.name || !formik.isValid}
          >
            Sign up
          </ButtonStuled>
        </FormButtonWrapper>
        {/* </FormWrapper> */}
      </form>
    </>
  );
};

export default FormUser;
