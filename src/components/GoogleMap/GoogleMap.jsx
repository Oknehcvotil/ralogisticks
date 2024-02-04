import { GoogleCont } from './GoogleMap.styled';
import { useParams } from 'react-router-dom';

const GoogleMap = () => {
  const { language } = useParams();

  return (
    <GoogleCont>
      {language === 'en' && (
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.916491900155!2d30.717019175518338!3d46.489965964417834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631ea1a1e102b%3A0xdaa005d39d8ca442!2sNovosel&#39;s&#39;koho%20St%2C%2032%2C%20Odesa%2C%20Odes&#39;ka%20oblast%2C%2065000!5e0!3m2!1sen!2sua!4v1707054605437!5m2!1sen!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {language === 'ua' && (
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.916491900155!2d30.71701917551836!3d46.489965964417834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631ea1a1e102b%3A0xdaa005d39d8ca442!2z0LLRg9C70LjRhtGPINCd0L7QstC-0YHQtdC70YzRgdGM0LrQvtCz0L4sIDMyLCDQntC00LXRgdCwLCDQntC00LXRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1suk!2sua!4v1707052305308!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      {language === 'ru' && (
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2746.916676965662!2d30.7195941!3d46.4899623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631ea1a1e102b%3A0xdaa005d39d8ca442!2z0YPQuy4g0J3QvtCy0L7RgdC10LvRjNGB0LrQvtCz0L4sIDMyLCDQntC00LXRgdGB0LAsINCe0LTQtdGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY1MDAw!5e0!3m2!1sru!2sua!4v1707054427689!5m2!1sru!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </GoogleCont>
  );
};

export default GoogleMap;
