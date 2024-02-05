import { useState } from 'react';
import {
  Container,
  InputWrapper,
  Label,
  StyledInput,
  InputMessage,
} from './CustomInput.styled';
import sprite from '../../assets/icons/sprite.svg';

const CustomInput = ({
  field,
  form,
  reference,
  onClick,
  readOnly,
  ...props
}) => {
  const {
    type,
    label = '',
    successFeedback = true,
    autoComplete = 'on',
    inputStyles = {},
  } = props;

  const { name, value, onBlur } = field;
  const [isFocused, setIsFocused] = useState(false);
  const errorMessage = form.errors[name];
  const touched = form.touched[name];

  const hasValue = value.toString().trim().length > 0;

  const showFeedback = (!!isFocused && hasValue) || touched;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = e => {
    onBlur(e);
    setIsFocused(false);
  };

  return (
    <Container>
      <InputWrapper>
        <Label htmlFor={name} isFocused={isFocused} hasValue={!!value}>
          {label}
        </Label>
        <StyledInput
          {...field}
          id={name}
          ref={reference}
          type={type}
          autoComplete={autoComplete}
          className={`${
            showFeedback
              ? errorMessage
                ? 'invalid'
                : successFeedback && 'valid'
              : ''
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={onClick}
          inputStyles={inputStyles}
          readOnly={readOnly}
        />
      </InputWrapper>
      {showFeedback && (
        <InputMessage
          ariaLive="polite"
          className={`${errorMessage ? 'invalid' : successFeedback && 'valid'}`}
        >
          <svg width={13} height={13}>
            <use href={`${sprite}#icon-success`} />
          </svg>
          {errorMessage
            ? errorMessage
            : successFeedback && `${label.toLowerCase()}`}
        </InputMessage>
      )}
    </Container>
  );
};

export default CustomInput;
