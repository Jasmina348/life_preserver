import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
VideoCameraTwoTone,
VideoCameraOutlined
} from '@ant-design/icons';
const { Title, Paragraph } = Typography;


export default function ModulePage() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title level={3}>Lesson 1- Introduction</Title>
        <Paragraph>
          CPR (Cardiopulmonary Resuscitation) is a life-saving technique used in
          emergencies when someone's heartbeat or breathing has stopped. The
          primary goal of CPR is to maintain blood circulation and oxygenation
          until professional medical help arrives. Here's a basic outline of
          what you might learn in your first CPR training lesson:
        </Paragraph>
      </Col>
      <Col span={8}>
        <Card bordered={false} style={{textAlign:"center"}}>
         <VideoCameraOutlined style={{
         fontSize: "200px",
         color: "#408021",
         stroke: "#408021",
         strokeWidth: "1px",
        }}/>
         <Title level={4}>Introduction</Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card  bordered={false} style={{textAlign:"center"}}>
        <VideoCameraTwoTone twoToneColor="#eb2f96" style={{color:"red",fontSize:200}}/>
        <Title level={4}>Introduction</Title>
        </Card>
      </Col>
      <Col span={8}>
        <Card  bordered={false} style={{textAlign:"center"}}>
        <VideoCameraTwoTone twoToneColor="#eb2f96" style={{color:"red",fontSize:200}}/>
        <Title level={4}>Introduction</Title>
        </Card>
      </Col>
      <Col span={12}>
      <Card >
          <Col span={12}><VideoCameraOutlined/></Col>
          <Col span={12}>
            <Row>
            <Col span={24}><Title level={4}>Resources</Title></Col>
            <Col span={24}></Col>
            </Row>
          </Col>
          </Card>
        
        
      </Col>
      
      <Col span={12}>
        <Card  bordered={false} style={{textAlign:"center"}}>
        <VideoCameraOutlined twoToneColor="#eb2f96" style={{color:"red",fontSize:200}}/>
        <Title level={4}>Introduction</Title>
        </Card>
      </Col>
     
    </Row>
   
  );
}
