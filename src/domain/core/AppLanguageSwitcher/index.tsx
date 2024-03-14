import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Dropdown, Menu} from 'antd';
import './index.style.less';
import {useCookies} from 'react-cookie';
import languageData from './data';
import {Default_Language} from '../../../shared/constants/AppConst';
import {useLocaleContext} from '../../utility/AppContextProvider/LocaleContextProvide';
import MainUtils from '../../../shared/utils/main';

const AppLanguageSwitcher = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies();
  const {locale}: any = useLocaleContext();
  const changeLanguage = async (language: any) => {
    await setCookies(
      Default_Language,
      language?.code.toLowerCase().toString(),
      {
        path: '/',
        sameSite: true,
      },
    );
  };
  useEffect(() => {
    if (MainUtils.isEmptyValue(cookies[Default_Language])) {
      setCookies(Default_Language, 'en', {
        path: '/',
        sameSite: true,
      });
    }
  }, [cookies, setCookies]);

  const menu = (
    <Menu id='language-switcher'>
      {languageData.map((language: any, index: any) => (
        <Menu.Item key={index} onClick={() => changeLanguage(language)}>
          <div className='langItem'>
            <i className={`flag flag-24 flag-${language.icon}`} />
            <h4>{language.name}</h4>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Fragment>
      <Dropdown
        dropdownRender={() => menu}
        trigger={['click']}
        overlayStyle={{zIndex: 1052}}>
        <a
          className='ant-dropdown-link langBtn'
          onClick={(e) => e.preventDefault()}>
          <span className='lang-icon'>
            <i
              className={`flag flag-24 flag-${
                locale?.code === 'en'
                  ? 'us'
                  : locale?.code === 'ar'
                  ? 'sa'
                  : locale?.code
              }`}
            />
          </span>
        </a>
      </Dropdown>
    </Fragment>
  );
};

export default AppLanguageSwitcher;

AppLanguageSwitcher.defaultProps = {
  iconOnly: false,
};

AppLanguageSwitcher.propTypes = {
  iconOnly: PropTypes.bool,
};
