import React from "react";
import {
  Row,
  Button,
  Typography,
  Form,
  Input
} from "antd";

import RegisterPage from './RegisterPage';
import "./loginpage.css";
import picture1 from "../static/images/cpr02.webp";

const {Title, Paragraph}=Typography;

const onFinish = (values) => {
console.log(values)
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginPage = () => (
  <>
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <img
        style={{
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
        src={picture1}
        alt=""
      ></img>
      <Row
        style={{
          height: 300,
          width: 500,
          margin: "10%",
          position: "absolute",
        }}
      >
    <div className="container">
    <Title level={2}>Sign In</Title>
    <Form
    name="basic"
    labelCol={{
      span: 24,
    }}
    wrapperCol={{
      span: 24,
    }}
    initialValues={{
      remember: true,
    }}
    style={{padding:"8px"}}
    layout="vertical"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ span: 14, offset: 4 } }>
    <Button type="primary" shape="round" htmlType="submit">LOGIN</Button>
    </Form.Item>


      

      <div style={{marginBottom:10}}>New User ? <a href="#"> Create an Account</a></div>

    </Form>
  </div>
      </Row>
    </div>
  </>
);
export default LoginPage;
