import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 20px 0;
`;

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 426px;
  padding: 0 10px;

  @media (min-width: 768px) {
    max-width: 766px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const LangCont = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
`;
