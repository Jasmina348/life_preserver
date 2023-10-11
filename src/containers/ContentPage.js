import React from 'react';
import {Row,Col,Card,Typography,Button} from 'antd'
import {JournalBookmarkFill,CalendarEvent,Book } from 'react-bootstrap-icons';


const { Title, Paragraph } = Typography;
export default function Contentpage() {

  return (
    <Row gutter={[16,16]}>
      <Col span={24}  style={{height:400,background:"#e0ebeb",textAlign:"center"}}>
    <Title level={3} style={{marginTop:100}}>New Course</Title>
    <Title style={{marginTop:"4px"}}>Introduction to First Aid</Title>
    <Button type="primary" ghost>
      Go To Course
    </Button>

    </Col>
    <Col span={6}>
      <Card title="GLOSSARY" bordered={false} style={{textAlign:'center'}}>
      <JournalBookmarkFill color="royalblue" size={96} />
      <Paragraph>GO TO GLOSSARY</Paragraph> 
      </Card>
    </Col>
    <Col span={6}>
      <Card title="GLOSSARY" bordered={false} style={{textAlign:'center'}}>
      <Book color="royalblue" size={96} />
      <Paragraph>GO TO GLOSSARY</Paragraph> 
      </Card>
    </Col>
    <Col span={6}>
      <Card title="GLOSSARY" bordered={false} style={{textAlign:'center'}}>
      <JournalBookmarkFill color="royalblue" size={96} />
      <Paragraph>GO TO GLOSSARY</Paragraph> 
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Calender" bordered={false} style={{textAlign:'center'}}>
      <CalendarEvent color="royalblue" size={96} />
      <Paragraph>GO TO GLOSSARY</Paragraph> 
      </Card>
    </Col>
  </Row>
  )
}
