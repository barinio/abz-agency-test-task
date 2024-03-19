import styled from 'styled-components';

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  @media (width >= 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
  @media (width >= 1024px) {
    gap: 29px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background-color: #ffffff;
  width: 100%;
  height: 254px;
  border-radius: 10px;
  @media (width >= 768px) {
    flex-basis: calc((100% - 16px) / 2);
  }
  @media (width >= 1024px) {
    max-width: 282px;
    flex-basis: calc((100% - 58px) / 3);
  }
`;

export const Image = styled.img`
  border-radius: 50%;
`;
export const LongText = styled.p.attrs({ as: 'p' })`
  display: inline-block;
  max-width: 288px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (width >= 1024px) {
    max-width: 242px;
  }
`;
export const LongLink = styled(LongText).attrs({ as: 'a' })`
  color: var(--text-prim);
  @media (width >= 1024px) {
    max-width: 242px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonStyled = styled.button`
  background-color: var(--prim-color);
  border-radius: 80px;
  padding: 4px 0;
  width: 120px;
  height: 34px;
  text-align: center;
  &:is(:hover, :focus) {
    background-color: var(--hover-color);
  }
`;

export const NoContent = styled.div`
  color: var(--error-color);
  text-align: center;
  font-size: var(--fz-title);
  line-height: var(--ln-title);
  text-decoration: underline;
`;
