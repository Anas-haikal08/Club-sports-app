import React, { useEffect, useState } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import { Link } from 'react-router-dom';
import { InfoCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import DetModal from './modal';
import axiosInstance from '../../../../src/shared/utils/axios.config'; // Replace with the correct path to your axios instance
import './elements.css';

interface IField {
  id: number;
  size: number;
  pic: string | null;
  description: string | null;
  duration: string;
  price: string;
  type: string;
  isUnderMaintenance: boolean;
  start_date: string;
  end_date: string;
  sport: {
    id: number;
    name: string;
  };
}

const ClubList: React.FC = () => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();
  const [fields, setFields] = useState<IField[]>([]);
  const [selectedField, setSelectedField] = useState<IField | null>(null);

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id='tab1.sideBarName' />,
        url: '/Clubs-Management/Clubs',
      },
    ]);
    fetchFields(); // Fetch fields when component mounts
  }, []);

  const fetchFields = async () => {
    try {
      const response = await axiosInstance.get('/field/all');
      setFields(response.data);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  const openDetailsPopup = (field: IField) => {
    setSelectedField(field);
  };

  const closeModal = () => {
    setSelectedField(null);
  };

  const handleEdit = (field: IField) => {
    // Handle edit functionality here
    console.log('Editing field:', field);
  };

  const handleDelete = (field: IField) => {
    // Handle delete functionality here
    console.log('Deleting field:', field);
  };

  return (
    <AppPageMetadata title={messages['tab1.tab11'].toString()}>
      <div className='club-list'>
        <h1 className='page-title'>
          <IntlMessages id='tab1.tab11' />
        </h1>
        <div className='data-grid'>
          <div className='grid-header'>
            <div>ID</div>
            <div>Sport</div>
            <div>Type</div>
            <div>Under Maintenance</div>
            <div>Actions</div>
          </div>
          {fields.map((field) => (
            <div className='club-item' key={field.id}>
              <div>{field.id}</div>
              <div>{field.sport.name}</div>
              <div>{field.type}</div>
              <div className='verification-status'>{field.isUnderMaintenance ? 'Yes' : 'No'}</div>
              <div className='actions-column'>
                <button onClick={() => handleEdit(field)}>Edit</button>
                <button onClick={() => handleDelete(field)}>Delete</button>
                <button onClick={() => openDetailsPopup(field)}>Details</button>
              </div>
            </div>
          ))}
        </div>
        <DetModal field={selectedField} closeModal={closeModal} />
      </div>
    </AppPageMetadata>
  );
};

export default ClubList;
