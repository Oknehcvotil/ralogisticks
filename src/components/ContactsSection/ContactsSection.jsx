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
import { contactItems } from 'data/data';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const ContactsSection = () => {
  const { t } = useTranslation();

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
        <ContactsList variants={container} initial="hidden" animate="visible">
          <ContactsListItem variants={itemAnimation}>
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
              animation={itemAnimation}
            />
          ))}

          <ContactsListItem variants={itemAnimation}>
            <Icon iconName="#icon-fax" width="30" height="30" />
            <p>fax: +38 (048) 737-50-76</p>
          </ContactsListItem>

          <ContactsListItem variants={itemAnimation}>
            <Icon iconName="#icon-clock" width="30" height="30" />
            <p>{t('workHours')}</p>
          </ContactsListItem>
        </ContactsList>

        <FormCont
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
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
