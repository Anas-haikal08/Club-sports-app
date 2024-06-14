import React, { useEffect, useState } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import { InfoCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal, Form, Input, Select } from 'antd';
import DetModal from './modal';
import axiosInstance from '../../../../src/shared/utils/axios.config'; // Replace with the correct path to your axios instance
import './elements.css';

const { Option } = Select;

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

interface ISport {
  id: number;
  name: string;
}

const ClubList: React.FC = () => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();
  const [fields, setFields] = useState<IField[]>([]);
  const [sports, setSports] = useState<ISport[]>([]);
  const [selectedField, setSelectedField] = useState<IField | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id='tab1.sideBarName' />,
        url: '/Clubs-Management/Clubs',
      },
    ]);
    fetchFields(); // Fetch fields when component mounts
    fetchSports(); // Fetch sports when component mounts
  }, []);

  const fetchFields = async () => {
    try {
      const response = await axiosInstance.get('/field/all');
      setFields(response.data);
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  };

  const fetchSports = async () => {
    try {
      const response = await axiosInstance.get('/sport/all');
      setSports(response.data);
    } catch (error) {
      console.error('Error fetching sports:', error);
    }
  };

  const openDetailsPopup = (field: IField) => {
    if (!isEditModalVisible) {
      setSelectedField(field);
    }
  };

  const closeModal = () => {
    setSelectedField(null);
  };

  const showEditModal = (field: IField) => {
    setSelectedField(field);
    setIsEditModalVisible(true);
    setIsUnderMaintenance(field.isUnderMaintenance);
    form.setFieldsValue({
      size: field.size,
      description: field.description,
      duration: field.duration,
      price: field.price,
      type: field.type,
      isUnderMaintenance: field.isUnderMaintenance,
      start_date: field.start_date,
      end_date: field.end_date,
      sportId: field.sport.id,
    });
  };

  const handleEdit = async (values: any) => {
    try {
      const modifiedValues = {
        ...values,
        start_date: values.isUnderMaintenance ? values.start_date : null,
        end_date: values.isUnderMaintenance ? values.end_date : null,
        sport: { id: values.sportId },
      };

      await axiosInstance.put(`/field/edit/${selectedField?.id}`, modifiedValues);
      message.success('Field updated successfully');

      // Update the fields array with the edited field
      const updatedFields = fields.map((field) =>
        field.id === selectedField?.id ? { ...field, ...modifiedValues } : field
      );

      setFields(updatedFields);

      setIsEditModalVisible(false);
      setSelectedField(null); // Clear selected field
    } catch (error) {
      message.error('Failed to update the field');
      console.error('Error updating field:', error);
    }
  };

  const handleDelete = (field: IField) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this field?',
      onOk: async () => {
        try {
          await axiosInstance.delete(`/field/delete/${field.id}`);
          message.success('Field deleted successfully');
          setFields(fields.filter(f => f.id !== field.id));
        } catch (error) {
          message.error('Failed to delete the field');
          console.error('Error deleting field:', error);
        }
      },
    });
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
                <Button onClick={() => showEditModal(field)} icon={<EditOutlined />} />
                <Button onClick={() => handleDelete(field)} icon={<DeleteOutlined />} />
                <Button onClick={() => openDetailsPopup(field)} icon={<InfoCircleOutlined />} />
              </div>
            </div>
          ))}
        </div>
        <DetModal field={isEditModalVisible ? null : selectedField} closeModal={closeModal} />
        <Modal
          title="Edit Field"
          visible={isEditModalVisible}
          onCancel={() => setIsEditModalVisible(false)}
          footer={null}
        >
          <Form
            form={form}
            onFinish={handleEdit}
            layout="vertical"
            initialValues={{
              isUnderMaintenance: selectedField?.isUnderMaintenance ?? false,
            }}
          >
            <Form.Item name="size" label="Size" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="duration" label="Duration" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="type" label="Type" rules={[{ required: true }]}>
              <Select>
                <Option value="Natural">Natural</Option>
                <Option value="Hybrid">Hybrid</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="isUnderMaintenance"
              label="Under Maintenance"
              valuePropName="checked"
            >
              <Select onChange={(value) => setIsUnderMaintenance(value)}>
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>
              </Select>
            </Form.Item>
            {isUnderMaintenance && (
              <>
                <Form.Item name="start_date" label="Start Date" rules={[{ required: isUnderMaintenance }]}>
                  <Input type="date" />
                </Form.Item>
                <Form.Item name="end_date" label="End Date" rules={[{ required: isUnderMaintenance }]}>
                  <Input type="date" />
                </Form.Item>
              </>
            )}
            <Form.Item name="sportId" label="Sport" rules={[{ required: true }]}>
              <Select>
                {sports.map((sport) => (
                  <Option key={sport.id} value={sport.id}>
                    {sport.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AppPageMetadata>
  );
};

export default ClubList;
