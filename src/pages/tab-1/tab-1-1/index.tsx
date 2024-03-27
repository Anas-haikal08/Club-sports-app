import React, { useEffect, useState } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './tab-11.css';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import DetModal from './modal';

interface IClub {
  id: number;
  name: string;
  description: string;
  location: string;
  picture: string;
  isBlocked: boolean;
  user_id: number;
}

const ClubList: React.FC = () => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id='tab1.sideBarName' />,
        url: '/Clubs-Management/Clubs',
      },
    ]);
  }, []);

  const [clubs, setClubs] = useState<IClub[]>([
    {
      id: 1,
      name: 'Club A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',
      location: 'City A',
      picture: '',
      isBlocked: false,
      user_id: 1,
    },
    {
      id: 2,
      name: 'Club B',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      location: 'City B',
      picture: 'https://example.com/club-b.jpg',
      isBlocked: true,
      user_id: 2,
    },
    {
      id: 3,
      name: 'Club C',
      description: 'At vero eos et accusamus et iusto odio dignissimos.',
      location: 'City C',
      picture: 'https://example.com/club-c.jpg',
      isBlocked: false,
      user_id: 3,
    },
  ]);

  const [selectedClub, setSelectedClub] = useState<IClub | null>(null);

  const openDetailsPopup = (club: IClub) => {
    setSelectedClub(club);
  };

  const closeModal = () => {
    setSelectedClub(null);
  };

  return (
    <AppPageMetadata title={messages['tab1.tab11'].toString()}>
      <div className="club-list">
        <h1 className="page-title">
          <IntlMessages id="tab1.tab11" />
        </h1>
        <div className="data-grid">
          <div className="grid-header">
            <div>ID</div>
            <div>Name</div>
            <div>Is Blocked</div>
            <div>Actions</div>
          </div>
          {clubs.map((club) => (
            <div className="club-item" key={club.id}>
              <div>{club.id}</div>
              <div>{club.name}</div>
              <div>
                {club.isBlocked ? (
                  <div className="verification-status not-verified">Blocked</div>
                ) : (
                  <div className="verification-status verified">Active</div>
                )}
              </div>
              <div className="actions-column">
                <Button onClick={() => openDetailsPopup(club)}>
                  <InfoCircleOutlined />
                </Button>
              </div>
            </div>

          ))}
        </div>
        <DetModal club={selectedClub} closeModal={closeModal} />
      </div>
    </AppPageMetadata >
  );
};

export default ClubList;