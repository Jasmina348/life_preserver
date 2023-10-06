import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  BookOutlined,
  MessageOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme ,Image} from 'antd';
import ContentPage from './ContentPage';
import ModulePage from './ModulePage';
const { Header, Sider, Content } = Layout;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Home', '1', < HomeOutlined/>),
    getItem('Courses', 'sub1', <BookOutlined />, [
      getItem('Module 1', '3'),
      getItem('Module 2', '4'),
      getItem('Module 3', '5'),
    ]),
    getItem('Get involved Forum', '6', < MessageOutlined/>),
    getItem('FAQS', '7', < VideoCameraOutlined/>),
  ];
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{background:"white"}}>
        <div className="demo-logo-vertical" />
        <Menu
        //   theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 500,
            // background: colorBgContainer,
          }}
        >
        {/* <ContentPage/> */}
        <ModulePage/>
      </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;