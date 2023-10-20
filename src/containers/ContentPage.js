import React from 'react';
import {Row,Col,Card,Typography,Button} from 'antd'
import {JournalBookmarkFill,CalendarEvent,Book } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import data from "../static/data/courseData.json";

const { Title, Paragraph } = Typography;
export default function Contentpage() {

  return (
    <Row gutter={[24,24]} >
      <Col span={24}  style={{height:400,background:"#e0ebeb",textAlign:"center"}}>
    <Title level={3} style={{marginTop:100}}>New Course</Title>
    <Title style={{marginTop:"4px"}}>Introduction to First Aid</Title>
    <Link to="/module/1">
    <Button type="primary" ghost >
      Go To Course
    </Button>
    </Link>

    </Col>
    {data.courses.map((item)=> 
      <Col span={8}>
      <Card title="GLOSSARY" bordered={false} style={{textAlign:'center'}} hoverable>
      <JournalBookmarkFill color="royalblue" size={96} />
      <Paragraph style={{marginTop:"2rem ",fontSize:"1rem"}}>{item.course_title}</Paragraph> 
      <Link to={"/module/1"} style={{marginTop:"2rem"}}>
       Get Started
    </Link>
      </Card>
    </Col>
    )}

  </Row>
  )
}
