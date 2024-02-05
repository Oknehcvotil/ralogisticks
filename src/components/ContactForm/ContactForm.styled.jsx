import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1024px;

    &.contact-page_form .input-container {
      display: flex;
      flex-direction: column;
    }

    &.contact-page_form {
      gap: 20px;
      margin: 0;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
