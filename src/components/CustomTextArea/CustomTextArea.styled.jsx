import styled from '@emotion/styled';

const breakpoints = [320, 768, 1045];

const mq = breakpoints.map(bp => `@media screen and (min-width: ${bp}px)`);

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const TextareaWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  z-index: -1;
  top: ${props => (props.isFocused || props.hasValue ? '-16px' : '16px')};
  left: ${props => (props.isFocused || props.hasValue ? '0' : '14px')};

  font-family: 'OpenSans', sans-serif;
  font-size: ${props => (props.isFocused || props.hasValue ? '10px' : '14px')};
  line-height: ${props => (props.isFocused || props.hasValue ? '1.5' : '1.29')};
  color: #282b4780;

  transition: top 0.2s ease-out, left 0.2s ease-out;

  ${mq[1]} {
    top: ${props => (props.isFocused || props.hasValue ? '-16px' : '15px')};

    font-size: ${props =>
      props.isFocused || props.hasValue ? '12px' : '16px'};
    line-height: ${props =>
      props.isFocused || props.hasValue ? '1.29' : '1.5'};
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 14px;

  font-size: 14px;
  line-height: 1.29;

  color: var(--title-color);

  background-color: inherit;

  border-radius: 12px;
  border: 2px solid var(--title-color);

  outline: none;

  height: 220px;

  resize: none;

  &:hover,
  &:focus {
    border-color: var(--logo-color);
    & ~ svg {
      stroke: var(--logo-color);
    }
  }

  ${props =>
    props.className.includes('valid') &&
    `
    border-color: #3CBF61;
		& ~ svg {
      stroke: #3CBF61;
    }
  `}

  ${mq[1]} {
    height: 110px;
    font-size: 16px;
    line-height: 1.5;
  }

  ${props => props.inputStyles}
`;

export const InputMessage = styled.div`
  position: absolute;
  bottom: -16px;
  left: 0;

  display: flex;
  align-items: center;
  gap: 3px;

  font-family: 'OpenSans', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;

  ${props =>
    props.className.includes('valid') &&
    `
    color: #3CBF61; 
    fill: #3CBF61; 
  `}
`;
