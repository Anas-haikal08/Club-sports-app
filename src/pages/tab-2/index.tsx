import React, { useEffect } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './tab-2.css';

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Tab2: React.FC = () => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id="tab2.sideBarName" />,
        url: '/users',
      },
    ]);
  }, []);

  // Dummy user data
  const users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <AppPageMetadata title={messages['tab2.sideBarName'].toString()}>
      <div className="user-list">
        <h1 className="page-title"><IntlMessages id="tab2.sideBarName" /></h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      </div>
    </AppPageMetadata>
  );
};


export default Tab2;
