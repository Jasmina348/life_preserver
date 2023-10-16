import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../static/data/data.json";
import { Row, Col, Button, Radio, Form } from "antd";
import "./quizpagecss.css";

export default function QuizPage() {
  //     const [quizData, SetQuizData] = useState([]);

  //   const fetchData = () => {
  //     return fetch("https://gist.github.com/cmota/f7919cd962a061126effb2d7118bec72")
  //           .then((response) => response.json())
  //           .then((data) => SetQuizData(data))
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   },[])
  const { id } = useParams();

  const item = data.modules.find((element) => element.id == id);
  console.log(item);
  return (
    <>
      <Row gutter={[24, 24]} className="quiz-container">
        <Form>
        {item.quizzes.map((data) => (
          <Col span={24}>
               <Form.Item>
         
              <p className="question"> {data.question}</p>
              <Radio.Group size="large" style={{ fontSize: "2rem" }}>
                {data.options.map((option) => (
                  <>
                    <Radio value={1} className="input" style={{ padding: 6 }} >
                      <span style={{ marginLeft: "6px" }}>{option}</span>
                    </Radio>
                    <br />
                  </>
                ))}
              </Radio.Group>
              </Form.Item>
      
          </Col>
        ))}
        <Col span={24}>
          <Button type="primary">Submit</Button>
        </Col>
        </Form>
      </Row>
    </>
  );
}
