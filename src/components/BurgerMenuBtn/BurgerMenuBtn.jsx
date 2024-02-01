import { useContext } from 'react';
import { MenuContext } from 'context/navState';
import { MenuButton, Bar } from './BurgerMenu.styled';

const BurgerMenuBtn = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton className={isMenuOpen ? 'active' : ''} onClick={clickHandler}>
      <Bar />
      <Bar />
      <Bar />
    </MenuButton>
  );
};

export default BurgerMenuBtn;
