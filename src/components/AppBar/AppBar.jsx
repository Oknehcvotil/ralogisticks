import LogoLink from 'components/LogoLink/LogoLink';
import { Header, HeaderCont, LangCont } from './AppBar.styled';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { BurgerMenuBtn } from 'components/BurgerMenuBtn/BurgerMenuBtn';

const AppBar = () => {
  return (
    <Header>
      <HeaderCont>
        <LogoLink />
        <LangCont>
          <LanguageSwitcher />
        </LangCont>
        <BurgerMenuBtn animate={'open'} />
      </HeaderCont>
    </Header>
  );
};

export default AppBar;
