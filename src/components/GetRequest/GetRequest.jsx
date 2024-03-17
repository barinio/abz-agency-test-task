import { useEffect, useState } from 'react';
import { Section } from '../Section/Section';
import { getUsers } from '../../api/api';
import {
  ButtonWrapper,
  Image,
  Item,
  UserInfo,
  UserList,
} from './GetRequest.styled';
import Button from '../Button/Button';

export const GetRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleShowMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { users, total_users } = await getUsers();

      if (Math.ceil(total_users / 6) <= currentPage) {
      }
      setUsers(users);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  return (
    <Section title="Working with GET request">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <UserList>
            {users.map(({ id, photo, name, position, email, phone }) => (
              <Item key={id}>
                <Image src={photo} alt="userAvatar" width={70} height={70} />
                <p>{name}</p>
                <UserInfo>
                  <p>{position}</p>
                  <p>{email}</p>
                  <p>{phone}</p>
                </UserInfo>
              </Item>
            ))}
          </UserList>

          <ButtonWrapper>
            <Button text="Show more" onClick={handleShowMore} />
          </ButtonWrapper>
        </>
      )}
    </Section>
  );
};
