import { useState } from 'react';
import FormUser from './FormUser';
import { SuccessContent } from './SuccessContent';
import { Section } from '../Section/Section';

import { PostRequestProps } from '../../type';

export const PostRequest: React.FC<PostRequestProps> = ({ fetchFirstPage }) => {
  const [isShow, setIsShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  setTimeout(() => {
    setIsShow(false);
    setIsSuccess(true);
  }, 3000);

  return (
    <>
      {isShow ? (
        <SuccessContent isSuccess={isSuccess} />
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
