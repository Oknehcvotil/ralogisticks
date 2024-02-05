import Title from 'components/Title/Title';
import { Cont, ContactsList, ContactsListItem } from './ContactsSection.styled';
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
      href: 'tel:+380487375076',
      iconName: '#icon-fax',
      text: '+38 (048) 737-50-76',
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

      <div>
        <div>
          <ContactsList>
            <ContactsListItem>
              <Icon iconName="#icon-location" width="20" height="20" />
              <p>{t('location.fullAdress')}</p>
            </ContactsListItem>

            <li>
              <ul>
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
              </ul>
            </li>
            <ContactsListItem>
              <Icon iconName="#icon-clock" width="20" height="20" />
              <p>{t('workHours')}</p>
            </ContactsListItem>
          </ContactsList>
        </div>

        <ContactForm />
      </div>
    </Cont>
  );
};

export default ContactsSection;
