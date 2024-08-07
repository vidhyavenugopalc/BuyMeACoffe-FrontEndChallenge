import React from "react";
import "./Explore.css";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { UserModal } from "./UserModal";
import { fetchData } from '../../services/userManagementService';
import {deleteUser} from '../../services/userManagementService';
import {addUser} from '../../services/userManagementService';
import { fetchRequestedData } from "../../services/userManagementService";
import { StatusModal } from './StatusModal';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const Explore=() =>{
  const [data, setData] = React.useState([]);
  const [maleActive, setMaleActive]=React.useState([]);
  const [femalActive, setFemaleActive]=React.useState([]);
  const [maleGender, setMaleGender]=React.useState([]);
  const [femaleGender, setFemaleGender]=React.useState([]);
  const [dataLength, setDataLength] = React.useState(0);
  const [availableUserCount , setAvailableUserCount] = React.useState(0);
  const [currentPageNumber, setCurrentPageNumber] = React.useState(1);
  const [dataToDisplay, setDataToDisplay] = React.useState([]);
  const TOTAL_VALUES_PER_PAGE = 5;
  
  React.useEffect(() => {
    const loadData = async () => {
        const result = await fetchData();
        console.log("result",result);
        setData(result);
    };
    loadData();
  }, []);
  React.useEffect(() => {
    const loadRequiredData = async () => {
        const result = await fetchRequestedData(1,TOTAL_VALUES_PER_PAGE);
        setDataLength(result.length);
        setDataToDisplay(result);
    };
    loadRequiredData();
  }, []);

  const goOnPrevPage = () => {
    if (currentPageNumber === 1) return;
    setCurrentPageNumber((prev) => prev - 1);
    const getData = async () => {
      const result = await fetchRequestedData(currentPageNumber,TOTAL_VALUES_PER_PAGE);
      setDataLength(result.length);
      setDataToDisplay(result);
    };
    getData();
  };

  const goOnNextPage = () => {
    if (currentPageNumber === data.length / TOTAL_VALUES_PER_PAGE) return;
    setCurrentPageNumber((prev) => prev + 1);
    const getData = async () => {
      const result = await fetchRequestedData(currentPageNumber,TOTAL_VALUES_PER_PAGE);
      setDataLength(result.length);
      setDataToDisplay(result);
    };
    getData();
  };

  const handlePageSelectChange = (e) => {
    setCurrentPageNumber(e.target.value);
  };
  
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
    console.log("delete",dataToDisplay[targetIdx]);
    let userId = dataToDisplay[targetIdx].id;
    const deleteData = async () => {
      const result = await deleteUser(userId);
      setDataToDisplay(dataToDisplay.filter((v, i) => i !== targetIdx));
    };

    deleteData();
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
    };
    loadData();
  }

  const handleSubmit = (newRow) =>{
    const addData = async () => {
      const result = await addUser(newRow);
      setDataToDisplay([result,...dataToDisplay] );
     
    };
    addData();
  }

  const [rowToEdit, setrowToEdit] = React.useState(null)
  const [action, setAction] = React.useState("add");

  const handleEditRow = (idx) => {
    setrowToEdit(idx);
    setAction("edit")
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
    for (var i = 0, len = dataToDisplay.length; i < len; i++) {
      if(dataToDisplay[i].gender==='male' && dataToDisplay[i].status==='active'){
        arrMaleActive.push(data[i]);
      }
      else if(dataToDisplay[i].gender==='female' && dataToDisplay[i].status==='active'){
        arrFemaleActive.push(data[i]);
      }
      if(dataToDisplay[i].gender==='male'){
        arrMale.push(data[i]);
      }
      else if(dataToDisplay[i].gender==='female'){
        arrFemale.push(data[i]);
      }
      if (dataToDisplay[i].status==='active'){
        availableUser.push(dataToDisplay[i]);
      }
    }
    setMaleActive(arrMaleActive)
    setFemaleActive(arrFemaleActive)
    setMaleGender(arrMale)
    setFemaleGender(arrFemale)
    setAvailableUserCount(availableUser.length)
  }
  if (dataToDisplay.length === 0) return <div>Loading...</div>;
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
    defaultValue={dataToDisplay[rowToEdit]}
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
          <Th>Available for chat</Th>
          <Th className="action">Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {dataToDisplay.map((user,idx)=>{
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
    
    <div className="pagination-container">
      <div className="page-no-dropdown">
        <input
          name="page-number"
          onChange={handlePageSelectChange}
          value={currentPageNumber}
          disabled
        >
        </input>
      </div>
      <div className="pagination-button-container">
        <button className="pagination-button" onClick={goOnPrevPage}><FaArrowLeft /></button>
        <button className="pagination-button" onClick={goOnNextPage}><FaArrowRight /></button>
      </div>
    </div>
  </div> 
}

export default Explore;