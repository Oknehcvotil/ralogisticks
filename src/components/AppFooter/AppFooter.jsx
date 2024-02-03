import {
  Footer,
  DeveloperCont,
  FooterCont,
  FooterCompanyName,
  FooterContactsList,
} from './AppFooter.styled';
import { useTranslation } from 'react-i18next';
import ContactItem from 'components/ContactItem/ContactItem';

const AppFooter = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      href: 'tel:+380936473201',
      iconName: '#icon-phone',
      text: '+38 (093) 647-32-01',
    },
    {
      href: 'tel:+380677597721',
      iconName: '#icon-phone',
      text: '+38 (067) 759-77-21',
    },
    {
      href: 'mailto:management@ralogistics.com.ua',
      iconName: '#icon-mail',
      text: 'management@ralogistics.com.ua',
    },
  ];

  return (
    <Footer>
      <FooterCont>
        <div>
          <FooterCompanyName>
            {`${t('location.homeCountry')}, ${t('location.homeCity')}, ${t(
              'companyName'
            )}`}
          </FooterCompanyName>
        </div>
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
