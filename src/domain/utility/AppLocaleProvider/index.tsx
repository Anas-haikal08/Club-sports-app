import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';
import AppLocale from '../../../shared/localization';
import {
  useLocaleActionsContext,
  useLocaleContext,
} from '../AppContextProvider/LocaleContextProvide';
import {IntlGlobalProvider} from '../helper/Utils';
import {useCookies} from 'react-cookie';
import {Default_Language} from '../../../shared/constants/AppConst';
import MainUtils from '../../../shared/utils/main';
import {useLayoutActionsContext} from '../AppContextProvider/LayoutContextProvider';
import {ThemeDirection} from '../../../shared/constants/AppEnums';
import {useDispatch} from 'react-redux';
import {setDirection} from 'src/domain/app/redux/auth/auth-slice';

const AppLocaleProvider = (props: any) => {
  const {rtlLocale, locale}: any = useLocaleContext();
  const currentAppLocale: any = AppLocale[locale?.code];
  const [cookies] = useCookies([Default_Language]);
  const {updateLocale}: any = useLocaleActionsContext();
  const {updateDirection}: any = useLayoutActionsContext();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!MainUtils.isEmptyValue(cookies[Default_Language])) {
      if (rtlLocale.indexOf(cookies[Default_Language]) !== -1) {
        updateDirection(ThemeDirection.RTL);
        dispatch(setDirection(ThemeDirection.RTL));
      } else {
        updateDirection(ThemeDirection.LTR);
        dispatch(setDirection(ThemeDirection.LTR));
      }
      updateLocale({code: cookies[Default_Language]});
    }
  }, [cookies]);

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default AppLocaleProvider;

AppLocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
