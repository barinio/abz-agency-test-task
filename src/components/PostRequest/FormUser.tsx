import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ValidationError } from 'yup';

import {
  ButtonStuled,
  ContainerUserInfo,
  ErrorMessage,
  FormButtonWrapper,
  FormInputWrapper,
  FormStyled,
  InputHidden,
  LabelSpan,
  ListRadioLabel,
  PhotoWrapper,
  PositionContainer,
  RadioLabel,
  TextFieldStyled,
  TitlePositionContainer,
  UploadBox,
  UploadLabel,
} from './PostRequest.styled';

import icons from '../../images/icons.svg';
import { getPositions, getToken, postUser } from '../../api/api';
import { FormUserProps, User } from '../../type';

const phoneRegExp = /^[+]{0,1}380([0-9]{9})$/;
const emailRegExp =
  // eslint-disable-next-line no-control-regex
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const MaxSise = 5242880;

const FormUser = ({
  fetchFirstPage,
  setIsShow,
  setIsSuccess,
}: FormUserProps) => {
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
          return value && (value as File).size <= MaxSise;
        }
      )
      .test('fileType', 'The photo format must be jpeg/jpg type', value => {
        return (
          value && ['image/jpeg', 'image/jpg'].includes((value as File).type)
        );
      })
      .test('fileDimensions', 'Minimum size of photo 70x70px', async value => {
        if (!value) throw new ValidationError('Value is required');
        return new Promise<boolean>((resolve, reject) => {
          const img = new Image();
          img.src = URL.createObjectURL(value as File);
          img.onload = () => {
            URL.revokeObjectURL(img.src);
            if (img.width >= 70 && img.height >= 70) {
              resolve(true);
            } else {
              reject(
                new ValidationError('Photo dimensions must be at least 70x70px')
              );
            }
          };
          img.onerror = () => {
            reject(new ValidationError('Failed to load image'));
          };
        });
      }),
  });

  const formik = useFormik<User>({
    initialValues: {
      id: '',
      name: '',
      email: '',
      phone: '',
      position: '',
      position_id: 1,
      photo: null,
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const newUser = await postUser(values);
        newUser && fetchFirstPage();
      } catch (error) {
        setIsSuccess(false);
        console.log('error:', error);
      } finally {
        setIsShow(true);
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
            <TextFieldStyled
              label="Name"
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              inputProps={{ minLength: 2, maxLength: 60 }}
              id="outlined-error"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <TextFieldStyled
              label="E-mail"
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              inputProps={{ minLength: 2, maxLength: 100 }}
              id="outlined-error"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <TextFieldStyled
              label="Phone"
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              id="outlined-error"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={
                (formik.touched.phone && formik.errors.phone) ||
                '+38 (XXX) XXX - XX - XX'
              }
            />
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
          </ListRadioLabel>
        </PositionContainer>

        <PhotoWrapper className="photo-upload-wrapper">
          <UploadLabel htmlFor="photo">
            <InputHidden
              id="photo"
              name="photo"
              type="file"
              onChange={event => {
                if (event.currentTarget.files) {
                  formik.setFieldValue('photo', event.currentTarget.files[0]);
                }
              }}
              accept="image/jpeg,image/jpg"
            />
            <UploadBox
              style={{
                border: formik.errors.photo
                  ? '2px solid var(--error-color)'
                  : '1px solid var(--text-prim)',
              }}
            >
              Upload
            </UploadBox>
            <LabelSpan
              style={{
                border: formik.errors.photo
                  ? '2px solid var(--error-color)'
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
