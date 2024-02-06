import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 62px 15px;
  line-height: 16px;

  p {
    margin-bottom: 30px;
    text-align: justify;
  }

  @media (min-width: 748px) {
    font-size: 14px;
    line-height: 18px;

    p {
      margin-bottom: 30px;
      text-align: justify;
    }
  }

  @media (min-width: 1045px) {
    padding: 84px 15px;
    max-width: 1024px;
  }
`;

export const PictureCont = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 15px;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(46, 47, 66, 0.4), rgba(46, 47, 66, 0.4));
    z-index: 1;
  }

  picture {
    position: relative;
  }
`;
