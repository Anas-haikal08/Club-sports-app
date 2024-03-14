import {BsBoxArrowLeft} from 'react-icons/bs';
import IntlMessages from '../../../../utility/IntlMessages';
import {useDispatch} from 'react-redux';
import {setVisibleLogout} from 'src/domain/app/redux/auth/auth-slice';

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={'logoutBtn'}
      onClick={() => dispatch(setVisibleLogout(true))}>
      <span>
        <BsBoxArrowLeft />
      </span>
      <IntlMessages id='common.logout' />
    </div>
  );
};

export default Logout;
