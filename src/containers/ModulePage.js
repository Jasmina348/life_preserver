import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { CameraVideo, JournalText } from "react-bootstrap-icons";
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
          what you might learn in your first CPR training lesson: CPR
          (Cardiopulmonary Resuscitation) is a life-saving technique used in
          emergencies when someone's heartbeat or breathing has stopped. The
          primary goal of CPR is to maintain blood circulation and oxygenation
          until professional medical help arrives. Here's a basic outline of
          what you might learn in your first CPR training lesson: CPR
          (Cardiopulmonary Resuscitation) is a life-saving technique used in
          emergencies when someone's heartbeat or breathing has stopped. The
          primary goal of CPR is to maintain blood circulation and oxygenation
          until professional medical help arrives. Here's a basic outline of
          what you might learn in your first CPR training lesson:
        </Paragraph>
      </Col>
      <Col span={24}>
        <Card bordered={false} style={{ textAlign: "center", padding: "20px" }}>
          <CameraVideo color="royalblue" size={150} />
          <Title level={4}>What is Cardiopulmonary Resuscitation? </Title>
        </Card>
      </Col>
      <Col span={12}>
        <Row style={{padding:"15px"}}>
          <Col span={2}>
            <JournalText color="royalblue" size={30} />
          </Col>
          <Col span={22}>
            <Title level={4} style={{marginTop:0}}>Resources</Title>
            <Paragraph>
              Browse Our Collection of Learning Materials for additional
              support.
            </Paragraph>
            <Button>View All</Button>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row style={{padding:"10px"}}>
          <Col span={2}>
            <JournalText color="royalblue" size={30} />
          </Col>
          <Col span={22}>
            <Title level={4} style={{marginTop:0}}>Quiz</Title>
            <Paragraph>
              Put your skills to the test. Take our quiz and see  how much you 
              remember from your first class. It's a multiple choice questions.
            </Paragraph>
            <Button> Take Quiz</Button>
          </Col>
        </Row></Col>
    </Row>
  );
}
