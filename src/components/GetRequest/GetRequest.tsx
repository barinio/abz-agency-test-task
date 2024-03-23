import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import {
  ButtonWrapper,
  Image,
  Item,
  UserInfo,
  UserList,
  LongText,
  ButtonStyled,
  LongLink,
  NoContent,
} from './GetRequest.styled';

import { instance } from '../../api/api';
import { Section } from '../Section/Section';
import Loader from '../Loader/loader';
import { GetRequestProps } from '../../type';

interface DarkTooltipProps extends TooltipProps {
  className?: string;
}

const DarkTooltip = styled(({ className, ...props }: DarkTooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="bottom-start"
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: ' var(--text-prim)',
    color: '#FFFFFF',
    fontSize: 'var(--fz-text)',
    padding: '3px 16px',
  },
}));

export const GetRequest = ({
  usersList,
  isLoading,
  setUsersList,
  nextPage,
  setNextPage,
}: GetRequestProps) => {
  const [lastPage, setLastPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = async () => {
    const { data } = await instance(nextPage);
    setUsersList([...usersList, ...data.users]);
    setNextPage(data.links.next_url);
    setLastPage(data.total_pages);
    setCurrentPage(data.page);
  };

  return (
    <Section title="Working with GET request">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {usersList.length !== 0 ? (
            <UserList>
              {usersList.map(({ id, photo, name, position, email, phone }) => (
                <Item key={id}>
                  {photo ? (
                    <Image
                      src={
                        photo instanceof File
                          ? URL.createObjectURL(photo)
                          : photo
                      }
                      alt="userAvatar"
                      width={70}
                      height={70}
                      loading="lazy"
                    />
                  ) : (
                    <div>No photo available</div>
                  )}
                  <LongText>{name}</LongText>
                  <UserInfo>
                    <LongText>{position}</LongText>
                    <DarkTooltip title={email}>
                      <LongLink href={`mailto:${email}`}>{email}</LongLink>
                    </DarkTooltip>
                    <LongLink href={`tel:${phone}`}>{phone}</LongLink>
                  </UserInfo>
                </Item>
              ))}
            </UserList>
          ) : (
            <NoContent>
              <p>Sorry</p>
              <p>We have some problems!</p>
              <p>It's still empty here</p>
            </NoContent>
          )}

          {lastPage > currentPage && usersList.length !== 0 && (
            <ButtonWrapper>
              <ButtonStyled onClick={handleClick}>Show more</ButtonStyled>
            </ButtonWrapper>
          )}
        </>
      )}
    </Section>
  );
};
