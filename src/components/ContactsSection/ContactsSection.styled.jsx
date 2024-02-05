import styled from '@emotion/styled';

export const Cont = styled.div`
  margin: 0 auto;
  padding: 62px 15px;

  @media (min-width: 1045px) {
    padding: 84px 15px;
    max-width: 1024px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  max-width: 375px;

  li:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export const ContactsListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PhoneList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;
