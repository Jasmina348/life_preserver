import React, { useState } from "react";
import { Route, Outlet } from "react-router";
import { Modal, Form, Input, InputNumber, DatePicker, Row, Col } from "antd";
import jwt_decode from "jwt-decode";
import LoginPage from "../containers/LoginPage";

export default function PrivateRoute(props) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [token, setToken] = useState(window.sessionStorage.getItem("token"))



  const decodedToken = jwt_decode(token);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        try {
          const response = await fetch(
            `http://localhost:3001/api/update/${decodedToken.id}`,
            {
              method: "PATCH",
              crossDomain: true,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          if (response.ok) {
            const data = await response.json();
            
            sessionStorage.setItem("token", data.token);
            setToken(data.token)
            window.location.reload();

         
          } else {
            console.error("Login failed");
          }
        } catch (error) {
          console.error("An error occurred", error);
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(decodedToken)
  return (
    <>
      {decodedToken.status === "user" ? (
        props.element
      ) : (
        <Modal
          title="Payment Details"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            layout="vertical"
            centered={true}
            style={{ width: "100%" }}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label="Name on the Card"
                  name="card_holder_name"
                  rules={[
                    { required: true, message: "Please input your Fullname!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Card Number"
                  name="card_number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your card Number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Expiry Date"
                  name="expiry_date"
                  rules={[{ required: true, message: "Select the date!" }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="CVV"
                  name="cvv"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your cvv number!",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      )}
    </>
  );
}
