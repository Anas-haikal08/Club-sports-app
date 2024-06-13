import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import IntlMessages from 'src/domain/utility/IntlMessages';
import axiosInstance from 'src/shared/utils/axios.config'; // Adjust the path as necessary
import { Button, Select, message } from 'antd'; // Import Ant Design components
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './AddField.css';

interface ITab12Props { }

interface FieldFormData {
  name: string;
  description: string;
  location: string;
  picture: FileList | null;
  size: string;
  pic: string;
  duration: string;
  price: string;
  type: string;
  sport_id: string;
  isUnderMaintenance: boolean;
  start_date: string;
  end_date: string;
}

interface Sport {
  id: number;
  name: string;
}

const AddField: React.FC<ITab12Props> = (props) => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState<FieldFormData>({
    name: '',
    description: '',
    location: '',
    picture: null,
    size: '',
    pic: '',
    duration: '',
    price: '',
    type: '',
    sport_id: '',
    isUnderMaintenance: false,
    start_date: '',
    end_date: '',
  });
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id="tab1.sideBarName" />,
        url: '/Clubs-Management/Add-Club',
      },
      {
        text: <IntlMessages id="tab1.tab12" />,
        url: '/Clubs-Management/Add-Club',
      },
    ]);

    fetchSports(); // Fetch sports when component mounts
  }, []);

  const fetchSports = async () => {
    try {
      const response = await axiosInstance.get('/sport/all');
      setSports(response.data);
    } catch (error) {
      console.error('Error fetching sports:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox') {
      const { checked } = event.target as HTMLInputElement;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      picture: file ? event.target.files : null,
    }));
  };

  const handleSportSelectChange = (value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      sport_id: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axiosInstance.post('/field/add', formData);
      // Show success message
      message.success('Field added successfully');
      // Navigate to the club list page
      navigate('/ClubList');
    } catch (error) {
      // Handle error, e.g., show error message
      console.error('Error adding field:', error);
      message.error('Failed to add field');
    }
  };
  return (
    <div className="tab12-card">
      <AppPageMetadata title={messages['tab1.tab12'].toString()} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1 className='title-card'>Add Field</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <input type="text" id="size" name="size" value={formData.size} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" name="type" value={formData.type} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="sport_id">Sport:</label>
          <Select
            id="sport_id"
            // name="sport_id"
            value={formData.sport_id}
            onChange={(value) => handleSportSelectChange(value.toString())}
            placeholder="Select a sport"
          >
            {sports.map((sport) => (
              <Select.Option key={sport.id} value={sport.id.toString()}>
                {sport.name}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="form-group">
          <label htmlFor="isUnderMaintenance">Is Under Maintenance:</label>
          <input
            type="checkbox"
            id="isUnderMaintenance"
            name="isUnderMaintenance"
            checked={formData.isUnderMaintenance}
            onChange={handleInputChange}
          />
        </div>
        {formData.isUnderMaintenance && (
          <>
            <div className="form-group">
              <label htmlFor="start_date">Start Date:</label>
              <input type="date" id="start_date" name="start_date" value={formData.start_date} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="end_date">End Date:</label>
              <input type="date" id="end_date" name="end_date" value={formData.end_date} onChange={handleInputChange} />
            </div>
          </>
        )}
        <div className="form-group">
          <label htmlFor="picture">Picture:</label>
          <input type="file" id="picture" name="picture" onChange={handleFileChange} />
        </div>
        <Button type="primary" htmlType="submit">Add Field</Button>
      </form>
    </div>
  );
};

export default AddField;
