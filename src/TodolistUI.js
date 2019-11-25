import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
const TodolistUI =(props)=> {
  return (
    <div style={{marginTop:10,marginLeft:10}}>
      <div>
        <Input value={props.inputValue} onChange={(e)=>{props.handleInputChange(e)}} placeholder="todoInfo" style={{width:500,marginRight:10}}/>
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style = {{ width: 500, marginTop: 10 }}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => <List.Item onClick={()=>props.handleItemClick(index)}>{item}</List.Item>}
      />
    </div>
  )
 }
 export default TodolistUI;
