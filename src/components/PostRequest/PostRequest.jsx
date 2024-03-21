import { useState } from 'react';
import { Section } from '../Section/Section';
import FormUser from './FormUser';
import successImage from '../../images/success-image.png';
import { SuccessContainer, TitleSuccess } from './PostRequest.styled';

export const PostRequest = ({ fetchFirstPage }) => {
  const [isShow, setIsShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  setTimeout(() => {
    setIsShow(false);
    setIsSuccess(true);
  }, 3000);
  return (
    <>
      {isShow ? (
        <SuccessContainer>
          <TitleSuccess>
            {isSuccess
              ? 'User successfully registered'
              : 'A user with this number or email already exists'}
          </TitleSuccess>
          <picture>
            <source
              media="(max-width: 360px)"
              srcSet={`${successImage} 1x,`}
              loading="lazy"
              width="300"
            />
            <source src={successImage} loading="lazy" />
            <img
              src={successImage}
              alt="success"
              width={328}
              height={290}
              loading="lazy"
            />
          </picture>
        </SuccessContainer>
      ) : (
        <Section title="Working with POST request">
          <FormUser
            fetchFirstPage={fetchFirstPage}
            setIsShow={setIsShow}
            setIsSuccess={setIsSuccess}
          />
        </Section>
      )}
    </>
  );
};
