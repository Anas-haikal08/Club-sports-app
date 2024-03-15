import React, { useEffect } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './tab-2.css';
import { IconBase } from 'react-icons';
interface IUser {
  id: number;
  username: string;
  email: string;
  phone_number: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  role_id: number;
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
    {
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      phone_number: '1234567890',
      isVerified: true,
      createdAt: '2022-01-01',
      updatedAt: '2022-01-02',
      deletedAt: null,
      role_id: 1,
    },
    {
      id: 2,
      username: 'jane_smith',
      email: 'jane@example.com',
      phone_number: '9876543210',
      isVerified: false,
      createdAt: '2022-02-01',
      updatedAt: '2022-02-02',
      deletedAt: null,
      role_id: 2,
    },
    {
      id: 3,
      username: 'bob_johnson',
      email: 'bob@example.com',
      phone_number: '5555555555',
      isVerified: true,
      createdAt: '2022-03-01',
      updatedAt: '2022-03-02',
      deletedAt: null,
      role_id: 2,
    },
  ];
  const getUserType = (role_id: number): string => {
    if (role_id === 1) {
      return 'Player';
    } else if (role_id === 2) {
      return 'Club';
    } else if (role_id === 3) {
      return 'Admin';
    } else {
      return 'Unknown';
    }
  };



  return (
    <AppPageMetadata title={messages['tab2.sideBarName'].toString()}>
      <div className="user-list">
        <h1 className="page-title">
          <IntlMessages id="tab2.sideBarName" />
        </h1>
        <ul className="data-grid">
          <li className="grid-header">
            <strong>ID</strong>
            <strong>Username</strong>
            <strong>Email</strong>
            <strong>Phone</strong>
            <strong>Verified</strong>
            <strong>Created At</strong>
            <strong>User Type</strong>
            <strong>Actions</strong>
          </li>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <span>{user.id}</span>
              <span>{user.username}</span>
              <span>{user.email}</span>
              <span>{user.phone_number}</span>
              <span className={`verification-status ${user.isVerified ? 'verified' : 'not-verified'}`}>
                {user.isVerified ? 'Yes' : 'No'}
              </span>
              <span>{user.createdAt}</span>

              <span>{getUserType(user.role_id)}</span>
              <span className="actions-column">
                <button>Activate</button>
                <button>Deactivate</button>
                <button>Confirm</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </AppPageMetadata>
  );
}
export default Tab2
