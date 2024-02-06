import ContactsSection from 'components/ContactsSection/ContactsSection';
import GoogleMap from 'components/GoogleMap/GoogleMap';

const ContactsPage = () => {
  return (
    <>
      <section>
        <ContactsSection />
      </section>
      <section>
        <GoogleMap />
      </section>
    </>
  );
};

export default ContactsPage;
