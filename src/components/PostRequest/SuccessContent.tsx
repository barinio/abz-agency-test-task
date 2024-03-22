import successImage from '../../images/success-image.png';
import { SuccessContentProps } from '../../type';
import { SuccessContainer, TitleSuccess } from './PostRequest.styled';

export const SuccessContent = ({ isSuccess }: SuccessContentProps) => {
  return (
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
          width="300"
        />
        <source src={successImage} />
        <img
          src={successImage}
          alt="success"
          width={328}
          height={290}
          loading="lazy"
        />
      </picture>
    </SuccessContainer>
  );
};
