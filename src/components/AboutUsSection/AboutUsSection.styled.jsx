import styled from '@emotion/styled';

export const AboutUsCont = styled.div`
  margin: 0 auto;
  padding: 62px 15px 40px;

  @media (min-width: 1045px) {
    padding: 84px 15px 40px;
    max-width: 1024px;
  }

  p {
    margin: 0 auto;
    text-align: justify;
    font-size: 14px;
    line-height: 170%;
    color: var(--main-text-color);
    max-width: 620px;
  }

  p:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    p:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
`;
