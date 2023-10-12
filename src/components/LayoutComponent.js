import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  BookOutlined,
  MessageOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import logo from "../static/images/LifePreserver.png";

import { Layout, Menu, Button, theme, Image, MenuProps } from "antd";
import ContentPage from "../containers/ContentPage";
import ModulePage from "../containers/ModulePage";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";

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
    getItem(<Link to="/">Home</Link>, "1", <HomeOutlined />),
    getItem("Courses", "sub1", <BookOutlined />, [
      getItem(<Link to="/module">Module 1</Link>, "3"),
      getItem(<Link to="/module">Module 2</Link>, "4"),
      getItem(<Link to="/module">Module 3</Link>, "5"),
    ]),
    getItem("Get involved Forum", "6", <MessageOutlined />),
    getItem("FAQS", "7", <VideoCameraOutlined />),
  ];
  const items1 = [
    {
      label: "About Us",
      key: "1",
    },
    {
      label: "Services",
      key: "2",
    },
    {
      label: "Contact Us",
      key: "3",
    },
    {
      label: "Logout",
      key: "4",
    },
  ];
  return (
    <Layout>
      <Header>
        {/* <div className="demo-logo">
          <img
            alt=""
            src={logo}
            width="120"
            height="70"
            style={{
              marginLeft: 20,
            }}
          />
        </div> */}
        <Menu mode="horizontal" items={items1} />;
      </Header>
      <Layout hasSider>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ background: "white" }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            //   theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
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
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 500,
              // background: colorBgContainer,
            }}
          >
            {/* <ContentPage/> */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
