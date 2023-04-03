import React from "react";
import { useState } from "react";
import { Form, Col, Row, Input, Button, Radio } from "antd";
import { DatePicker, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Box, Center, FormControl, Heading } from "@chakra-ui/react";

function Newtask() {
  const [data, setData] = useState({});
  // const [date, setDate] = useState({})
  // const[prioritydata, setPriority] = useState({})

  const { RangePicker } = DatePicker;
  // const onChange = (datevalue, dateString) => {
  // console.log('Selected Time: ', value);
  // console.log('Formatted Selected Time: ', dateString);
  // };
  // const onOk = (value) => {
  // console.log('onOk: ', value);
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // const datepicker = e.target.datepicker;
    // const datevalue = e.target.datevalue;

    // const priority = e.target.priority;
    // const priorityvalue = e.target.priorityvalue;

    // const onOk = (value) => {
    console.log(`selected ${value}`);
    // console.log('onOk: ', value);
    //     };

    //create an object for the current input field event
    const currentInputFieldData = {
      [name]: value,
      // [datepicker]: datevalue,
      // [priority]:priorityvalue
    };
    //Merge the data object with the current inout field data object

    const updateData = {
      ...data,
      ...currentInputFieldData,
    };
    setData(updateData);
  };

  const handleSubmit = (e) => {
    console.log(data);

    addTask(data);

    e.preventDefault();
  };

  async function addTask(data) {
    const serverHost = "http://localhost:4001";
    const url = serverHost + "/tasks";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    let response = await fetch(url, options);
  }
  // async function addDate(){
  //     const serverHost = 'http://localhost:4000';
  //     const url = serverHost + '/tasks';
  //     const options = {
  //         method:'POST',
  //         headers: {
  //             'Content-Type' : 'application/json'
  //         },
  //         body:JSON.stringify(date)
  //         }
  //         let response = await fetch(url,options)
  // }

  return (
    <div>
      <Box
  w='100%'
  h='600px'
  bgGradient='linear(to-r, blue.400, green.500, teal.400)'
>
   

      <Heading color={"grey.100"} fontFamily={"Rampage Monoline"} marginBottom={"2em"}>
      <h1>Please enter your tasks telow</h1>
      </Heading>

   

      <Center>

      <Form layout="horizontal" className="todo-form" onFinish={handleSubmit} >
        <Row gutter={20}>
        
          <Col xs={24} sm={15} md={13}>
            <Form.Item 
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input
              
                label="Task"
                name="task"
                onChange={handleChange}
                placeholder="Task"
              />
            </Form.Item>
            
          </Col>
         
          
          <Col xs={16} sm={15} md={5}>
            
          <Form.Item >
          <input type="date" name="Start date" onChange={handleChange} />
        </Form.Item>
  
        <Form.Item>
          <input type="date" name="End date"  onChange={handleChange} />
        </Form.Item>
          </Col>
          <Col>
            <>
              <Form.Item>
                   <Radio.Group name="priority" onChange={handleChange}>
                  <Radio  value="Low">Low</Radio>
                  <Radio value="Medium">Medium</Radio>
                  <Radio value="High">High</Radio>
                </Radio.Group>
              </Form.Item>
            </>
          </Col>
          <Col>
                       <>
                       <Form.Item>
       
                          <Radio.Group name='status' onChange={handleChange}>
                            <Radio  value='Not Started'>Not Started</Radio>
                            <Radio  value='In Progress'>In Progress</Radio>
                            <Radio  value='Completed'>Completed</Radio>
                          </Radio.Group>
                       </Form.Item>
    
    
    
                      </>
            </Col>
          

          <Col>
            <Button type="primary" htmlType="submit" block>
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
      </Center>
    </Box>
    </div>
  );
}

export default Newtask;
