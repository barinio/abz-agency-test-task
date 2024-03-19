import { useState } from 'react';
import { Section } from '../Section/Section';
import FormUser from './FormUser';
import successImage from '../../images/success-image.png';
import { SuccessContainer, TitleSuccess } from './PostRequest.styled';

export const PostRequest = ({ fetchFirstPage }) => {
  const [isShow, setIsShow] = useState(false);
  setTimeout(() => {
    setIsShow(false);
  }, 3000);
  return (
    <>
      {isShow ? (
        <SuccessContainer>
          <TitleSuccess>User successfully registered</TitleSuccess>
          <img src={successImage} alt="success" width={328} height={290} />
        </SuccessContainer>
      ) : (
        <Section title="Working with POST request">
          <FormUser fetchFirstPage={fetchFirstPage} setIsShow={setIsShow} />
        </Section>
      )}
    </>
  );
};
