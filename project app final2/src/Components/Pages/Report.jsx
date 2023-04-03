import React,{useState,useEffect} from "react";
import {Table} from 'antd'
function Report(){
const serverHost = 'http://localhost:4000';
const [data,setData] = useState([])
const column = [
    {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'firstName',
    },
    {
    title: 'Middle Name',
    dataIndex: 'second_name',
    key: 'middleName',
    },
    {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'lastName',
    }
    ]
    useEffect(()=>{
        async function fetchData(){
        const url = serverHost + '/students';
        const response = await fetch(url, {method:'GET'})
        const res = await response.json()
        // console.log(res)
        setData(res)
        // console.log(data)
        }
        fetchData()
        },[1])
        return(
            <div> <h1>This is the report page</h1>
                <p> Below are our staff members:</p>
                    <Table columns={column} dataSource={data}></Table>
            </div>
            
        )
        }
        export default Report;