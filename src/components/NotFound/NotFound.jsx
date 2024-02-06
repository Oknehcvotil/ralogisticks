import { Container, Text } from './NotFound.styled';
import Title from 'components/Title/Title';
import { Link } from 'react-router-dom';

const NotFound = ({ children }) => {
  return (
    <Container>
      <div>
        <Title
          style={{
            margin: '0 auto 20px',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontFamily: '"HeliosCond", sans-serif',
            fontSize: '40px',
            color: 'var(--main-text-color)',
          }}
        >
          404
        </Title>
        <Text>{children}</Text>
        <Link to="/">GO TO THE HOME PAGE</Link>
      </div>
    </Container>
  );
};

export default NotFound;
