import { Oval } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#4343e5"
      secondaryColor="#4343e5"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoadingSpinner;
