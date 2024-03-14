import {useIntl} from 'react-intl';
import '../AuthWrapper.style.less';
import AppConfirmPopup from '../../../domain/core/AppConfirmPopup';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLoading,
  getVisibleLogout,
} from 'src/domain/app/redux/auth/auth-selectors';
import {
  setLoading,
  setVisibleLogout,
} from 'src/domain/app/redux/auth/auth-slice';
import {useCookies} from 'react-cookie';
import {AUTH_TOKEN, FCM_TOKEN_KEY} from 'src/shared/constants/AppConst';

const Logout = () => {
  const visibleLogout = useSelector(getVisibleLogout);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  const {messages} = useIntl();
  const [, , removeCookie] = useCookies([AUTH_TOKEN]);

  const logout = () => {
    dispatch(setLoading(true));
    removeCookie(AUTH_TOKEN, {path: '/', sameSite: true});
    dispatch(setVisibleLogout(false));
    dispatch(setLoading(false));
    localStorage.removeItem(FCM_TOKEN_KEY);
  };

  return (
    <AppConfirmPopup
      loading={loading}
      visible={visibleLogout}
      setVisible={(data: any) => dispatch(setVisibleLogout(data))}
      handleOK={logout}
      title={messages['common.logout.title']}
      okText={messages['common.ok']}
      cancelText={messages['common.cancel']}
    />
  );
};

export default Logout;
