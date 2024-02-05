import styled from '@emotion/styled';

export const SectionCont = styled.section`
  background-color: #f5f5f5;
`;

export const Cont = styled.div`
  margin: 0 auto;
  padding: 62px 15px;

  @media (min-width: 1045px) {
    padding: 84px 15px;
    max-width: 1024px;
  }
`;

export const ListCont = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
  gap: 40px;

  svg {
    fill: var(--logo-color);
    margin-bottom: 10px;
  }

  a {
    text-transform: capitalize;
    color: var(--main-text-color);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    gap: 60px 117px;
  }

  @media (min-width: 1045px) {
    gap: 0;
    justify-content: space-between;
  }
`;
