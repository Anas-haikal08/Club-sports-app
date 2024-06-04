import React, { useEffect, useState } from 'react';
import { Layout, Breadcrumb, Row, Col, Card, Typography, Image } from 'antd';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import './MyClub.css'; // Import the CSS file

const { Content } = Layout;

interface IClubInfo {
    photo: string;
    name: string;
    description: string;
    location: string;
}

const MyClub: React.FC = () => {
    const { setBreadcrumb }: any = useBreadcrumbContext();
    const { messages } = useIntl();
    const [clubInfo, setClubInfo] = useState<IClubInfo>({
        photo: '',
        name: 'club 1 ',
        description: 'this is a new club  and will be updated',
        location: '',
    });

    useEffect(() => {
        setBreadcrumb([
            {
                text: <IntlMessages id="tab0.sideBarName" />,
                url: '/MyClub',
            },
        ]);

        const fetchClubInfo = async () => {
            const response = await fetch('/api/myclub');
            const data = await response.json();
            setClubInfo(data);
        };

        fetchClubInfo();
    }, [setBreadcrumb]);

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
                                    <Image src={clubInfo.photo} alt="Club Photo" width="100%" />
                                    <Typography.Title level={2} className="club-title">
                                        {clubInfo.name}
                                    </Typography.Title>
                                    <Typography.Paragraph className="club-description">
                                        {clubInfo.description}
                                    </Typography.Paragraph>
                                    <Typography.Text strong className="club-location-label">
                                        Location:
                                    </Typography.Text>
                                    <Typography.Text className="club-location">
                                        {clubInfo.location}
                                    </Typography.Text>
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
