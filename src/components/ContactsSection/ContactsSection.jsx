import Title from 'components/Title/Title';
import {
  Cont,
  ContactsList,
  ContactsListItem,
  FlexBox,
  FormCont,
} from './ContactsSection.styled';
import { useTranslation } from 'react-i18next';
import ContactForm from 'components/ContactForm/ContactForm';
import Icon from 'components/Icon/Icon';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsSection = () => {
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
    <Cont>
      <Title
        style={{
          margin: '0 auto 50px',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontFamily: '"HeliosCond", sans-serif',
          fontSize: '40px',
          color: 'var(--title-color)',
        }}
      >
        {t('titles.contactsPage')}
      </Title>

      <FlexBox>
        <ContactsList>
          <ContactsListItem>
            <Icon iconName="#icon-location" width="30" height="30" />
            <p>{t('location.fullAdress')}</p>
          </ContactsListItem>

          {contactItems.map((item, index) => (
            <ContactItem
              key={index}
              href={item.href}
              iconName={item.iconName}
              text={item.text}
              width="30"
              height="30"
            />
          ))}

          <ContactsListItem>
            <Icon iconName="#icon-fax" width="30" height="30" />
            <p>fax: +38 (048) 737-50-76</p>
          </ContactsListItem>

          <ContactsListItem>
            <Icon iconName="#icon-clock" width="30" height="30" />
            <p>{t('workHours')}</p>
          </ContactsListItem>
        </ContactsList>

        <FormCont>
          <Title
            level={2}
            style={{
              margin: '0 auto 20px',
              textTransform: 'uppercase',
              textAlign: 'center',
              fontFamily: '"HeliosCond", sans-serif',
              fontSize: '25px',
              color: 'var(--title-color)',
            }}
          >
            {t('titles.request')}
          </Title>
          <ContactForm className={'contact-page_form'} />
        </FormCont>
      </FlexBox>
    </Cont>
  );
};

export default ContactsSection;
