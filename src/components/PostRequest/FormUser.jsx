import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonStuled,
  ContainerUserInfo,
  ErrorMessage,
  FormButtonWrapper,
  FormInput,
  FormInputWrapper,
  FormStyled,
  InputHidden,
  LabelSpan,
  ListRadioLabel,
  PhotoWrapper,
  PositionContainer,
  RadioLabel,
  TitlePositionContainer,
  UploadBox,
  UploadLabel,
} from './PostRequest.styled';

import icons from '../../images/icons.svg';
import { getPositions, getToken, postUser } from '../../api/api';

const phoneRegExp = /^[+]{0,1}380([0-9]{9})$/;
const emailRegExp =
  // eslint-disable-next-line no-control-regex
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const MaxSise = 5242880;

const FormUser = ({ fetchFirstPage, setIsShow }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'User name must be at least 2 characters')
      .max(60, 'User name must be at most 64 characters')
      .required('User name is required'),
    email: Yup.string()
      .required('Email is required')
      .matches(emailRegExp, 'Invalid email address'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(phoneRegExp, '+38 (XXX) XXX - XX - XX'),
    position_id: Yup.number().required('Position is required'),
    photo: Yup.mixed()
      .required('Photo is required')
      .test(
        'fileSize',
        'The photo size must not be greater than 5 Mb',
        value => {
          return value && value.size <= MaxSise;
        }
      )
      .test('fileType', 'The photo format must be jpeg/jpg type', value => {
        return value && ['image/jpeg', 'image/jpg'].includes(value.type);
      })
      .test('fileDimensions', 'Minimum size of photo 70x70px', async value => {
        if (!value) return false;
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = URL.createObjectURL(value);
          img.onload = () => {
            URL.revokeObjectURL(img.src);
            resolve(img.width >= 70 && img.height >= 70);
          };
          img.onerror = reject;
        });
      }),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const newUser = await postUser(values);
        newUser && fetchFirstPage();
        setIsShow(true);
      } catch (error) {
        console.log('error:', error);
      } finally {
        formik.resetForm();
      }
    },
  });

  const [positions, setPositions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { positions } = await getPositions();
      setPositions(positions);
    };
    fetchData();
    getToken();
  }, []);

  return (
    <>
      <FormStyled onSubmit={formik.handleSubmit}>
        <ContainerUserInfo>
          <FormInputWrapper>
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              minLength={2}
              maxLength={60}
              style={{
                color:
                  formik.touched.name && formik.errors.name
                    ? 'var(--error-color)'
                    : '#7E7E7E',
                border:
                  formik.touched.name && formik.errors.name
                    ? '1px solid var(--error-color)'
                    : '1px solid #d0cfcf',
              }}
            />
            {formik.touched.name && formik.errors.name ? (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
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
              minLength={2}
              maxLength={100}
              style={{
                color:
                  formik.touched.email && formik.errors.email
                    ? 'var(--error-color)'
                    : '#7E7E7E',
                border:
                  formik.touched.email && formik.errors.email
                    ? '1px solid var(--error-color)'
                    : '1px solid #d0cfcf',
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
                    ? 'var(--error-color)'
                    : '#7E7E7E',
                border:
                  formik.touched.phone && formik.errors.phone
                    ? '1px solid var(--error-color)'
                    : '1px solid #d0cfcf',
              }}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <ErrorMessage>{formik.errors.phone}</ErrorMessage>
            ) : (
              <ErrorMessage style={{ color: '#7E7E7E' }}>
                +38 (XXX) XXX - XX - XX
              </ErrorMessage>
            )}
          </FormInputWrapper>
        </ContainerUserInfo>

        <PositionContainer>
          <TitlePositionContainer>Select your position</TitlePositionContainer>
          <ListRadioLabel>
            {positions.map(({ name, id }) => (
              <RadioLabel key={id}>
                <InputHidden
                  type="radio"
                  id={id}
                  name="position_id"
                  value={name}
                  checked={formik.values.position_id === id}
                  onChange={() => formik.setFieldValue('position_id', id)}
                />
                <label htmlFor={id}>
                  <svg width="20" height="20">
                    <use href={icons + '#icon-checkbox'}></use>
                  </svg>
                  {name}
                </label>
              </RadioLabel>
            ))}
            {formik.touched.position_id && formik.errors.position_id ? (
              <ErrorMessage>{formik.errors.position_id}</ErrorMessage>
            ) : null}
          </ListRadioLabel>
        </PositionContainer>

        <PhotoWrapper className="photo-upload-wrapper">
          <UploadLabel htmlFor="photo">
            <InputHidden
              id="photo"
              name="photo"
              type="file"
              onChange={event => {
                formik.setFieldValue('photo', event.currentTarget.files[0]);
              }}
              accept="image/jpeg,image/jpg"
            />
            <UploadBox
              style={{
                border: formik.errors.photo
                  ? '1px solid var(--error-color)'
                  : '1px solid #d0cfcf',
              }}
            >
              Upload
            </UploadBox>
            <LabelSpan
              style={{
                border: formik.errors.photo
                  ? '1px solid var(--error-color)'
                  : '1px solid #d0cfcf',
                borderLeft: formik.errors.photo ? 'none' : '1px solid #d0cfcf',
              }}
            >
              {formik.values.photo
                ? formik.values.photo.name
                : 'Upload your photo'}
            </LabelSpan>
          </UploadLabel>
          {formik.errors.photo ? (
            <ErrorMessage>{formik.errors.photo}</ErrorMessage>
          ) : null}
        </PhotoWrapper>
        <FormButtonWrapper>
          <ButtonStuled
            type="submit"
            disabled={!formik.values.photo?.name || !formik.isValid}
          >
            Sign up
          </ButtonStuled>
        </FormButtonWrapper>
      </FormStyled>
    </>
  );
};

export default FormUser;
