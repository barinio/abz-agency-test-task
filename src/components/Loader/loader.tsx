import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing
        visible={true}
        height="48"
        width="48"
        ariaLabel="color-ring-loading"
        wrapperStyle={{ transform: 'rotate(90deg)' }}
        wrapperClass="color-ring-wrapper"
        colors={['#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3', '#00BDD3']}
      />
    </LoaderWrapper>
  );
};
export default Loader;
