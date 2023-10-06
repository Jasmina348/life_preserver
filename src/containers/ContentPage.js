import React from 'react';
import {Row,Col,Card} from 'antd'

export default function Contentpage() {

  return (
    <Row gutter={[16,16]}>
    <Col span={8}>
      <Card title="Calender" bordered={false}>
        Card Content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="CPR Activities" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Calender" bordered={false}>
        Card Content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="CPR Activities" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
  )
}
