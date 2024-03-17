import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: var(--prim-color);
  border-radius: 80px;
  padding: 4px 0;
  width: ${props => (props.$text === 'Show more' ? '120px' : '100px')};
  height: 34px;
  text-align: center;
`;
