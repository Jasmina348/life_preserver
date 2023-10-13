import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { CameraVideo, JournalText } from "react-bootstrap-icons";
import { Outlet, Link, json } from "react-router-dom";
import data from "../static/data/data.json";
import { useParams } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function ModulePage() {
  const { id } = useParams();
  console.log(data);
  const item = data.modules.find((element) => element.id == id);
  console.log(item);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={3}>{item.module_title}</Title>
          <Paragraph>{item.description}</Paragraph>
        </Col>
        <Col span={24}>
          <Card
            bordered={false}
            style={{ textAlign: "center", padding: "20px" }}
          >
            <a href={item.video_link} target="_blank" rel="noopener noreferrer">
              <CameraVideo color="royalblue" size={150} />
            </a>
            <Title level={4}>{item.video_description}</Title>
          </Card>
        </Col>
        <Col span={12}>
          <Row style={{ padding: "15px" }}>
            <Col span={2}>
              <JournalText color="royalblue" size={30} />
            </Col>
            <Col span={22}>
              <Title level={4} style={{ marginTop: 0 }}>
                Resources
              </Title>
              <Paragraph>
                Browse Our Collection of Learning Materials for additional
                support.
              </Paragraph>
              <Button>View All</Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row style={{ padding: "10px" }}>
            <Col span={2}>
              <JournalText color="royalblue" size={30} />
            </Col>
            <Col span={22}>
              <Title level={4} style={{ marginTop: 0 }}>
                Quiz
              </Title>
              <Paragraph>
                Put your skills to the test. Take our quiz and see how much you
                remember from your first class. It's a multiple choice
                questions.
              </Paragraph>
              <Button>
                <Link to={"/quiz/"+ item.id}>Take Quiz</Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
