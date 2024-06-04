import { useEffect, useState } from 'react';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import { useBreadcrumbContext } from 'src/domain/utility/AppContextProvider/BreadcrumbContextProvider';
import { useIntl } from 'react-intl';
import IntlMessages from 'src/domain/utility/IntlMessages';
import React from 'react';
import { Layout, Menu, Breadcrumb, Statistic, Row, Col, Card, Typography } from 'antd';
import { Pie, Column, Line } from '@ant-design/plots';
import { UserOutlined, TeamOutlined, SettingOutlined } from '@ant-design/icons';
import './Home.css'; // Import the CSS file

const { Header, Content, Footer } = Layout;

interface ITab0Props { }

const Tab0: React.FC<ITab0Props> = (props) => {
  const { setBreadcrumb }: any = useBreadcrumbContext();
  const { messages } = useIntl();
  const [walletBalance, setWalletBalance] = useState(0);

  useEffect(() => {
    setBreadcrumb([
      {
        text: <IntlMessages id="tab0.sideBarName" />,
        url: '/Home',
      },
    ]);

    const fetchWalletData = async () => {
      const response = await fetch('/api/wallet');
      const data = await response.json();
      setWalletBalance(data.balance);
    };

    fetchWalletData();
  }, [setBreadcrumb]);

  const pieData = [
    { type: 'club managers ', value: 30 },
    { type: 'clubs', value: 70 },
  ];

  const columnData = [
    { type: 'Jan', value: 30 },
    { type: 'Feb', value: 20 },
    { type: 'Mar', value: 50 },
    { type: 'Apr', value: 70 },
    { type: 'May', value: 60 },
  ];

  const lineData = [
    { month: 'Jan', value: 3 },
    { month: 'Feb', value: 4 },
    { month: 'Mar', value: 3.5 },
    { month: 'Apr', value: 5 },
    { month: 'May', value: 4.9 },
  ];

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };

  const columnConfig = {
    data: columnData,
    xField: 'type',
    yField: 'value',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: 'month' },
      value: { alias: 'Reservations' },
    },
  };

  const lineConfig = {
    data: lineData,
    xField: 'month',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };

  return (
    <AppPageMetadata title={messages['tab0.sideBarName'].toString()}>
      <IntlMessages id="tab0.sideBarName" />
      <Layout className="layout">


        <div className="admin-wallet">
          <Typography.Text className="admin-wallet-title">Admin Wallet Balance:</Typography.Text>
          <Typography.Text className="admin-wallet-balance">${walletBalance}</Typography.Text>
        </div>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          <div className="site-layout-content">
            <Row gutter={16}>
              <Col span={8}>
                <Card>
                  <Statistic title="managers" value={30} />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic title="clubs " value={70} />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic title="Reservations " value={150} />
                </Card>
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 16 }}>
              <Col span={12}>
                <Card title="Ratio of managers to clubs">
                  <Pie data={pieData} angleField="value" colorField="type" />
                </Card>
              </Col>
              <Col span={12}>
                <Card title=" Monthly Reservations">
                  <Column data={columnData} xField="type" yField="value" />
                </Card>
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 16 }}>
              <Col span={24}>
                <Card title=" Reservations over the months  ">
                  <Line data={lineData} xField="month" yField="value" />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2024 منصة إدارة الملاعب</Footer>
      </Layout>
    </AppPageMetadata>
  );
};

export default Tab0;
