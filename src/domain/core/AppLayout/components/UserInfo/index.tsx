import { Fragment } from 'react';
import clsx from 'clsx';
import { Avatar, Dropdown, List } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import './index.style.less';
import { useThemeContext } from '../../../../utility/AppContextProvider/ThemeContextProvider';
import IntlMessages from '../../../../utility/IntlMessages';
import { FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setVisibleLogout } from 'src/domain/app/redux/auth/auth-slice';

const UserInfo = () => {
  const { themeMode }: any = useThemeContext();
  const dispatch = useDispatch();

  const menu = (
    <List className='dropdown-list'>
      <List.Item onClick={() => dispatch(setVisibleLogout(true))}>
        <List.Item.Meta title={<IntlMessages id='common.logout' />} />
      </List.Item>
    </List>
  );

  return (
    <Fragment>
      <div
        className={clsx('cr-user-info', {
          light: themeMode === 'light',
        })}>
        <Dropdown
          dropdownRender={() => menu}
          trigger={['click']}
          placement='bottomRight'
          overlayStyle={{
            zIndex: 1052,
            minWidth: 150,
          }}>
          <a className='cr-user-info-inner ant-dropdown-link'>
            <Avatar
              size={35}
              icon={<FiUser />}
              className='justify-content-center'
            />
            <span className='cr-user-info-content'>
              <span className='cr-user-name-info'>
                <h3
                  className={clsx('cr-user-name', {
                    light: themeMode === 'light',
                  })}>
                  Club
                </h3>
                <span className='cr-user-arrow'>
                  <FaChevronDown />
                </span>
              </span>
            </span>
          </a>
        </Dropdown>
      </div>
    </Fragment>
  );
};

export default UserInfo;
