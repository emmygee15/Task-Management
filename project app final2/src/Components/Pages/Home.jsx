import React from "react";
import { useState, useEffect } from "react";
import { Space, Table } from "antd";
import { Box, Heading } from "@chakra-ui/react";

function Home() {
  const serverHost = "http://localhost:4001";
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Task",
      dataIndex: "task",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Start Date",
      dataIndex: "Start date",
      key: "age",
    },

    {
      title: "End Date",
      dataIndex: "End date",
      key: "age",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "age",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const url = serverHost + "/tasks";
      const response = await fetch(url, { method: "GET" });
      const res = await response.json();
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div>
        <Box
  w='100%'
  h='600px'
  bgGradient='linear(to-r, blue.400, green.500, teal.400)'
>
  
<Heading color={"grey.100"} fontFamily={"Rampage Monoline"} marginBottom={"2em"}>
      <h1>Your Tasks</h1>
      </Heading>
    
      <Table columns={columns} dataSource={data} ></Table>
      </Box>
    </div>
  );
}

export default Home;

//   // Temp State
//   const [newTask, setNewTask] = useState('');
//   const [updateData, setUpdateData] = useState('');

//   // Delete task
//   ///////////////////////////
//   const deleteTask = (id) => {
//     let newTasks = data.filter( task => task.id !== id)
//     setData(newTasks);
//   }

// // Mark task as done or completed
//   ///////////////////////////

//   const markDone = (id) => {
//     let newTask = data.map( task => {
//       if( task.id === id ) {
//         return ({ ...task, status: !task.status })
//       }
//       return task;
//     })
//     setData(newTask);
//   }
//  // Update task
//   ///////////////////////////
//   function updateTask(){
//     let filterRecords = [...data].filter( task => task.id !== updateData.id );
//     let updatedObject = [...filterRecords, updateData]
//     setData(updatedObject);
//     setUpdateData('');
//   }
//   // Update task

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
