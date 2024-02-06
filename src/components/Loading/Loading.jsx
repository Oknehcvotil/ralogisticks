import { LoadingCont, LoadingWrapper } from './Loading.styled';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const Loading = ({ noBackdrop }) => {
  return (
    <LoadingWrapper noBackdrop={noBackdrop}>
      <LoadingCont>
        <LoadingSpinner />
      </LoadingCont>
    </LoadingWrapper>
  );
};

export default Loading;
