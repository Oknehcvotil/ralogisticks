import {
  Container,
  Label,
  StyledTextarea,
  TextareaWrapper,
  InputMessage,
} from './CustomTextArea.styled';
import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';

const CustomTextArea = ({ field, form, reference, onClick, ...props }) => {
  const {
    label = '',
    successFeedback = true,
    autoComplete = 'on',
    inputStyles = {},
  } = props;

  const { name, value, onBlur } = field;
  const [isFocused, setIsFocused] = useState(false);
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
      <TextareaWrapper>
        <Label htmlFor={name} isFocused={isFocused} hasValue={!!value}>
          {label}
        </Label>
        <StyledTextarea
          {...field}
          id={name}
          ref={reference}
          autoComplete={autoComplete}
          className={`${
            showFeedback && hasValue ? successFeedback && 'valid' : ''
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={onClick}
          inputStyles={inputStyles}
        />
      </TextareaWrapper>
      {showFeedback && hasValue && (
        <InputMessage
          ariaLive="polite"
          className={'valid'}
        >
          <svg width={13} height={13}>
            <use href={`${sprite}#icon-success`} />
          </svg>
          {label.toLowerCase()}
        </InputMessage>
      )}
    </Container>
  );
};

export default CustomTextArea;
