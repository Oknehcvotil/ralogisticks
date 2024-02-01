import styled from '@emotion/styled';

export const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  outline: 0;
  border: 0;
  padding: 7px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  span:not(:last-of-type) {
    margin-bottom: 7px;
  }

  :focus {
    span {
      background-color: var(--logo-color);
    }
  }

  :hover {
    span {
      background-color: var(--logo-color);
    }

    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    }
  }
`;

export const Bar = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  background-color: var(--title-color);
`;
