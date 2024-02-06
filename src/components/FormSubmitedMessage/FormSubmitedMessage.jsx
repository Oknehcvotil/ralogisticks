import { TextCont } from './FormSubmitedMessage.styled';

const FormSubmitedMessage = ({ children }) => {
  return (
    <TextCont>
      <p>{children}</p>
    </TextCont>
  );
};

export default FormSubmitedMessage;
