import React from 'react';
import { Button, Form, Input, InputNumber, Typography, Row, Alert } from 'antd';
import NavBar from '../components/NavBar';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const {Title}=Typography;
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = async(values) => {
  const { fullname, email, messages } = values;

  try{
    const response = await fetch("http://localhost:3001/api/contactus", {
      method: 'POST',
      crossDomain:true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullname, email, messages }),
    });

    if (response.ok) {
      <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
      // console.log(data);
      

    } else {
      console.error('Failed To Add Data');
    }
  }catch(error) {
      console.error('An error occurred', error);
    }
}

const ContactUsPage = () => (
  <>
  
  <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Row
        style={{
          height: 200,
          width: "100%",
          // marginTop:'2%',
          // position: "absolute",
        }}
      >
            <div className="container">
    <Title level={2}>Contact Form</Title>
    <Form
    {...layout}
    name="nest-messages"
    layout='vertical'
    onFinish={onFinish}
    style={{
      maxWidth: 500,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name="fullname"
      label=" Full Name"
      style={{width:"100%"}}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input style={{width:"100%"}} />
    </Form.Item>
    <Form.Item
      name="email"
      label="Email"
      style={{width:"100%"}}
      rules={[
        {
          type: 'email',
          required:true
        },
      ]}
    >
      <Input style={{width:"100%"}}/>
      </Form.Item>

    <Form.Item name="messages" label="Message">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 2.5,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
      </Row>

    </div>
  
  </>
  
);
export default ContactUsPage;