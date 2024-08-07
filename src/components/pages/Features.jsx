import React from "react";
// import "./Feature.css";
// import React from "react";
import "./Explore.css";
import axios from 'axios';
// import { Explore } from '@mui/icons-material';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
// import data from "../../mock-data.json"
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { UserModal } from "./UserModal";
import { fetchData } from '../../services/userManagementService';
import {deleteUser} from '../../services/userManagementService';
import {addUser} from '../../services/userManagementService';
import { StatusModal } from './StatusModal';
export const Features=() =>{
    const [data, setData] = React.useState([]);
  const [maleActive, setMaleActive]=React.useState([]);
  const [femalActive, setFemaleActive]=React.useState([]);
  const [maleGender, setMaleGender]=React.useState([]);
  const [femaleGender, setFemaleGender]=React.useState([]);
  const [dataLength, setDataLength] = React.useState(0);
  const [availableUserCount , setAvailableUserCount] = React.useState(0);
  React.useEffect(() => {
    const loadData = async () => {
        const result = await fetchData();
        console.log("result",result);
        setData(result);
        setDataLength(result.length);
    };

    loadData();
}, []);
  const [contacts, setContacts] = React.useState(data);
  const [modalOpen, setModalOpen]= React.useState(false);
  const [statusModalOpen, setStatusModalOpen]= React.useState(false);
  function getHeaderStyle(status) {
      if (status === 'active') {
        return {color: 'green' } 
      } else if (status === 'inactive') {
        return {color: 'red'}
      } else {
        return {}
      }
  }
  const handleDeleteRow = (targetIdx) =>{
    console.log("delete",data[targetIdx]);
    let userId = data[targetIdx].id;
    const deleteData = async () => {
      const result = await deleteUser(userId);
      console.log("result",result);
      setData(data.filter((v, i) => i !== targetIdx));
     
  };

  deleteData();
  const loadData = async () => {
    const result = await fetchData();
    console.log("result",result);
    setData(result);
    
  };

  loadData();
  }
  const handleSubmit = (newRow) =>{
    console.log("newRow",newRow);
    const addData = async () => {
      const result = await addUser(newRow);
      console.log("result",result);
       setData([result,...data] );
     
  };

  addData();
  // const loadData = async () => {
  //   const result = await fetchData();
  //   console.log("result",result);
  //   setData(result);
   
  // };

  // loadData();
  }
  const [rowToEdit, setrowToEdit] = React.useState(null)
  const [action, setAction] = React.useState("add");
  const handleEditRow = (idx) => {
    setrowToEdit(idx);
    setAction("edit")
    console.log("rowToEdit",rowToEdit);
    setModalOpen(true);
  }
  const handleAddRow =() => {
    setAction("add");
    setrowToEdit(null);
  }
  const getPercentage = () => {
    //loop through array and build array of categories and array of totals
    var arrMaleActive = [];
    var arrFemaleActive = [];
    var arrMale = [];
    var arrFemale = [];
    var availableUser = [];
    for (var i = 0, len = data.length; i < len; i++) {
      if(data[i].gender==='male' && data[i].status==='active'){
        arrMaleActive.push(data[i]);
      }
      else if(data[i].gender==='female' && data[i].status==='active'){
        arrFemaleActive.push(data[i]);
      }
      if(data[i].gender==='male'){
        arrMale.push(data[i]);
      }
      else if(data[i].gender==='female'){
        arrFemale.push(data[i]);
      }
      if (data[i].status==='active'){
        availableUser.push(data[i]);
      }
    }
    setMaleActive(arrMaleActive)
    setFemaleActive(arrFemaleActive)
    setMaleGender(arrMale)
    setFemaleGender(arrFemale)
    setAvailableUserCount(availableUser.length)
 }
  return <div className="table-wrapper">
    <div className="head-wrapper">
      <p className="page-heading">Manage creators</p>
      <button className="status-btn" onClick={() => { setStatusModalOpen(true); ;getPercentage()}} >View status</button>
      <button className="btn" onClick={() => {setModalOpen(true); handleAddRow()}}>+ Add a new creator</button>
    </div>
    {modalOpen && <UserModal closeModal={() => {
      setModalOpen(false);
    }}
    onSubmit={handleSubmit}
    defaultValue={data[rowToEdit]}
    action = {action}
    />}
    {statusModalOpen && <StatusModal closeModal={() => {
      setStatusModalOpen(false);
    }}
    maleActive = {maleActive.length}
    femalActive = {femalActive.length}
    maleGender = {maleGender.length}
    femaleGender = {femaleGender.length}
    dataLength = {dataLength}
    availableUserCount = {availableUserCount}
    />}
    <Table className="table">
      <Thead>
        <Tr>
          <Th className="name">Name</Th>
          <Th className="email">Email</Th>
          <Th>Gender</Th>
          <Th>Status</Th>
          <Th className="action">Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((user,idx)=>{
          const statusText = user.status.charAt(0).toUpperCase() + user.status.slice(1)
          const gendeText = user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
          return (
          <Tr>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{gendeText}</Td>
            <Td><span style={getHeaderStyle(user.status)}>{statusText}</span></Td>
            <Td>
              <span className="actions">
              <button className="edit" onClick={() => handleEditRow(idx) }><span><b>Edit </b></span></button>
              <button className="delete" onClick={() => handleDeleteRow(idx) }>  <RiDeleteBin6Line /></button>
              </span>
            </Td>
          </Tr>
        )})}
      </Tbody>
    </Table>
    
  </div> 
}
export default Features;