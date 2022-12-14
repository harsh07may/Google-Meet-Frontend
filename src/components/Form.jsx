import React from "react";
import { useEffect } from "react";
import "antd/dist/antd.css";
import "../components/Form.css";
import { Button, Form, Input, DatePicker, Card } from "antd";
import moment from "moment-timezone";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Forms = () => {
  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "#c9e2ff";
    };
  }, []);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="create">
      <h2>Add an Event</h2>
      <Card className="form-card">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="Form-container"
        >
          <Form.Item
            name={["user", "summary"]}
            label="Event Title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                message: "Describe your event",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item name={["user", "location"]} label="Location">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "start"]}
            label="Start"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              format="MMMM Do YYYY, h:mm"
              className="date-picker"
              showTime={{
                defaultValue: moment("00:00", "HH:mm"),
              }}
              onChange={(date, dateString) => setStart(dateString)}
            />
          </Form.Item>
          <Form.Item
            name={["user", "end"]}
            label="End"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              format="MMMM Do YYYY, h:mm"
              className="date-picker"
              showTime={{
                defaultValue: moment("00:00", "HH:mm"),
              }}
              onChange={(date, dateString) => setStart(dateString)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: "#112E55",
                borderColor: "#112E55",
                borderRadius: "5px",
              }}
            >
              Add Event
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Forms;
