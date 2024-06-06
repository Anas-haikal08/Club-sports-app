import React, { useEffect, useState } from 'react';
import { Layout, Breadcrumb, Row, Col, Card, Typography, Image, Input, Button, message } from 'antd';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './MyClub.css'; // Import the CSS file

const { Content } = Layout;
const { TextArea } = Input;

interface IClubInfo {
    photo: string;
    name: string;
    description: string;
    location: string;
}

const MyClub: React.FC = () => {
    const { setBreadcrumb }: any = useBreadcrumbContext();
    const { messages } = useIntl();
    const [isEditing, setIsEditing] = useState(false);
    const [clubInfo, setClubInfo] = useState<IClubInfo>({
        photo: '',
        name: 'Club 1',
        description: 'This is a new club and will be updated.',
        location: '123 Club Street, City, Country',
    });

    const [editClubInfo, setEditClubInfo] = useState<IClubInfo>({ ...clubInfo });

    useEffect(() => {
        setBreadcrumb([
            {
                text: <IntlMessages id="tab0.sideBarName" />,
                url: '/MyClub',
            },
        ]);

        // Simulating an API call with static data
        // const fetchClubInfo = async () => {
        //   try {
        //     const response = await fetch('/api/myclub');
        //     const data = await response.json();
        //     setClubInfo(data);
        //     setEditClubInfo(data);
        //   } catch (error) {
        //     console.error('Failed to fetch club info:', error);
        //   }
        // };

        // fetchClubInfo();
    }, [setBreadcrumb]);

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditClubInfo({ ...editClubInfo, [name]: value });
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setEditClubInfo({ ...editClubInfo, photo: URL.createObjectURL(file) });
        }
    };

    const handleSave = () => {
        // Simulating a successful save operation
        // try {
        //   const response = await fetch('/api/myclub', {
        //     method: 'PUT',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(editClubInfo),
        //   });

        //   if (response.ok) {
        //     const updatedInfo = await response.json();
        //     setClubInfo(updatedInfo);
        //     setIsEditing(false);
        //     message.success('Club information updated successfully');
        //   } else {
        //     message.error('Failed to save club information');
        //   }
        // } catch (error) {
        //   console.error('Failed to save club info:', error);
        //   message.error('Failed to save club information');
        // }

        setClubInfo(editClubInfo);
        setIsEditing(false);
        message.success('Club information updated successfully');
    };

    return (
        <AppPageMetadata title={messages['tab0.sideBarName'].toString()}>
            <IntlMessages id="tab0.sideBarName" />
            <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} />
                    <div className="site-layout-content">
                        <Row justify="center">
                            <Col xs={24} sm={24} md={18} lg={16} xl={12}>
                                <Card className="club-card">
                                    {isEditing ? (
                                        <>
                                            <Input type="file" accept="image/*" onChange={handlePhotoChange} />
                                            {editClubInfo.photo && (
                                                <Image src={editClubInfo.photo} alt="Club Photo" width="100%" />
                                            )}
                                        </>
                                    ) : (
                                        <Image src={clubInfo.photo} alt="Club Photo" width="100%" />
                                    )}
                                    {isEditing ? (
                                        <Input
                                            type="text"
                                            name="name"
                                            value={editClubInfo.name}
                                            onChange={handleEditChange}
                                            placeholder="Club Name"
                                            className="edit-input"
                                        />
                                    ) : (
                                        <Typography.Title level={2} className="club-title">
                                            {clubInfo.name}
                                        </Typography.Title>
                                    )}
                                    {isEditing ? (
                                        <TextArea
                                            name="description"
                                            value={editClubInfo.description}
                                            onChange={handleEditChange}
                                            placeholder="Club Description"
                                            rows={4}
                                            className="edit-input"
                                        />
                                    ) : (
                                        <Typography.Paragraph className="club-description">
                                            {clubInfo.description}
                                        </Typography.Paragraph>
                                    )}
                                    {isEditing ? (
                                        <Input
                                            type="text"
                                            name="location"
                                            value={editClubInfo.location}
                                            onChange={handleEditChange}
                                            placeholder="Club Location"
                                            className="edit-input"
                                        />
                                    ) : (
                                        <>
                                            <Typography.Text strong className="club-location-label">
                                                Location:
                                            </Typography.Text>
                                            <Typography.Text className="club-location">
                                                {clubInfo.location}
                                            </Typography.Text>
                                        </>
                                    )}
                                    <div className="edit-buttons">
                                        {isEditing ? (
                                            <Button type="primary" onClick={handleSave}>
                                                Save
                                            </Button>
                                        ) : (
                                            <Button type="primary" onClick={() => setIsEditing(true)}>
                                                Edit
                                            </Button>
                                        )}
                                        {isEditing && (
                                            <Button type="default" onClick={() => setIsEditing(false)}>
                                                Cancel
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </AppPageMetadata>
    );
};

export default MyClub;
