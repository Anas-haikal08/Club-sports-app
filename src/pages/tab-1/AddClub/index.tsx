import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './AddClub.css';
interface ITab12Props { }

interface ClubFormData {
  name: string;
  description: string;
  location: string;
  picture: FileList | null;
}

const AddClub: React.FC<ITab12Props> = (props) => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();
  const [formData, setFormData] = useState<ClubFormData>({
    name: '',
    description: '',
    location: '',
    picture: null,
  });

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
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="tab12-card">
      <AppPageMetadata title={messages['tab1.tab12'].toString()} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h1 className='title-card'>Add Club</h1>
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
          <label htmlFor="picture">Picture:</label>
          <input type="file" id="picture" name="picture" onChange={handleFileChange} />
        </div>
        <button type="submit">Add Club</button>
      </form>
    </div>
  );
};

export default AddClub;