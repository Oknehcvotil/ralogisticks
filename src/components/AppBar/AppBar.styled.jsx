import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 20px 0;
  background: linear-gradient(to right, #ecedff1a, #8c8cff);
`;

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  /* @media (min-width: 768px) {
    max-width: 766px;
  } */

  @media (min-width: 1200px) {
    justify-content: space-between;
    max-width: 1158px;
  }
`;

export const LangCont = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  margin-right: 50px;

  @media (min-width: 768px) {
    margin-right: 120px;
  }

  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;
