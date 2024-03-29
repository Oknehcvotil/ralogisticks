import styled from '@emotion/styled';

export const Header = styled.div`
  padding: 20px 0;
  background: linear-gradient(to right, #ecedff1a, #8c8cff);
  min-height: 112px;
`;

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 0 15px;

  width: 100%;

  @media (min-width: 1045px) {
    justify-content: space-between;
    max-width: 1024px;
  }
`;

export const LangCont = styled.div`
  position: relative;
  height: 21px;
  width: 22px;
  margin-right: 50px;

  @media (min-width: 768px) {
    margin-right: 120px;
  }

  @media (min-width: 1045px) {
    margin-right: 0;
  }
`;
