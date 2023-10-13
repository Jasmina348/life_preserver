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
import { Outlet, Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

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
      getItem(<Link to={`module/1`}>Module 1</Link>, "3"),
      getItem(<Link to={`module/2`}>Module 2</Link>, "4"),
      getItem(<Link to={`module/3`}>Module 3</Link>, "5"),
      getItem(<Link to={`module/4`}>Module 4</Link>, "6"),
      getItem(<Link to={`module/5`}>Module 5</Link>, "7"),
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
    getItem(<Link to="/contactus">Contact Us</Link>, "5"),
    getItem(<span onClick={() => handleLogout()}>LogOut</span>),
  ];
  return (
    <Layout>
      <Header>
       <span style={{fontSize:"20px",color:"white"}}>Jasmina</span>
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
        <Menu
          style={{ float: "right" }}
          theme="dark"
          mode="horizontal"
          items={items1}
        />
        
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
    // <Layout>
    //       <Header ><NavBar/></Header>
    //       <Layout hasSider>

    //   <Sider trigger={null} collapsible collapsed={collapsed} style={{background:"white"}}>
    //     <div className="demo-logo-vertical" />
    //     <Menu
    //     //   theme="dark"
    //       mode="inline"
    //       defaultSelectedKeys={['1']}
    //       defaultOpenKeys={['sub1']}
    //       items={items}
    //     />
    //   </Sider>
    //   <Layout>
    //     <Header
    //       style={{
    //         padding: 0,
    //         background: colorBgContainer,
    //       }}
    //     >
    //       <Button
    //         type="text"
    //         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //         onClick={() => setCollapsed(!collapsed)}
    //         style={{
    //           fontSize: '16px',
    //           width: 64,
    //           height: 64,
    //         }}
    //       />
    //     </Header>
    //     <Content
    //       style={{
    //         margin: '24px 16px',
    //         padding: 24,
    //         minHeight: 500,
    //         // background: colorBgContainer,
    //       }}
    //     >
    //     {/* <ContentPage/> */}
    //     <Outlet />

    //   </Content>
    //   <Footer style={{ textAlign: 'center' }}>Life Preserver ©2023</Footer>
    //   </Layout>
    //   </Layout>
    // </Layout>
  );
};
export default LayoutComponent;
