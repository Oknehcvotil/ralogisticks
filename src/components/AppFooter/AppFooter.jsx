import {
  Footer,
  DeveloperCont,
  FooterCont,
  FooterCompanyName,
  FooterContactsList,
  FooterCompanyYear,
  FooterCompanyNameCont,
} from './AppFooter.styled';
import { useTranslation } from 'react-i18next';
import ContactItem from 'components/ContactItem/ContactItem';
import { contactItems } from 'data/data';

const AppFooter = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <Footer>
      <FooterCont>
        <FooterCompanyNameCont>
          <FooterCompanyName>
            {`${t('location.homeCountry')}, ${t('location.homeCity')}, ${t(
              'companyName'
            )}`}
          </FooterCompanyName>
          <FooterCompanyYear>© 2016 - {currentYear}</FooterCompanyYear>
        </FooterCompanyNameCont>
        <address>
          <FooterContactsList>
            {contactItems.map((item, index) => (
              <ContactItem
                key={index}
                href={item.href}
                iconName={item.iconName}
                text={item.text}
                width="20"
                height="20"
              />
            ))}
          </FooterContactsList>
        </address>
      </FooterCont>
      <DeveloperCont>
        Powered by
        <a
          href="https://www.linkedin.com/in/kirill-litovchenko/"
          target="blank"
        >
          K_Litovchenko
        </a>
      </DeveloperCont>
    </Footer>
  );
};

export default AppFooter;
