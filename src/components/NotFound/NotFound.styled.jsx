import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: var(--main-text-color);
    transition: color 300ms ease-in-out;

    :hover,
    :focus {
      color: var(--logo-color);
    }
  }
`;

export const Text = styled.p`
  width: 200px;
  margin: 0;
  color: var(--main-text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`;
