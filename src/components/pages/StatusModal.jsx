import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import "./StatusModal.css";
import { IoMdClose } from "react-icons/io";
export const StatusModal = ({ closeModal,maleActive, femalActive, maleGender,  femaleGender, dataLength, availableUserCount}) => {
    
    const maleActiveP =Math.round(( maleActive/ availableUserCount) * 100)+'%';
    const femalActiveP =Math.round( (femalActive/ availableUserCount) * 100)+'%';
    const maleP = (maleGender / dataLength) * 100+'%';
    const femaleP =(femaleGender / dataLength) * 100+'%';
    const genderData = [{ id: 0, value: maleGender, label: 'Male' +'\n'+  maleP },
        { id: 1, value: femaleGender, label: 'Female'+'\n'+femaleP  }]
    const statusData = [
        { id: 0, value: maleActive, label: 'Male'+'\n'+maleActiveP },
        { id: 1, value: femalActive, label: 'Female'+'\n'+femalActiveP  }
    ]
    const [selectOption, setSelectOption] = React.useState("gender")   
    const handleChange = (e) => {
        setSelectOption(e.target.value)
    }  
    
    return (
        <div className="modal-container" onClick={(e) => {
            if(e.target.className === "modal-container") closeModal()
            }}
        >
            <div className="modals">
                <div className="modals-heading">
                    <span>Status 
                    <select name="selectchart" defaultValue={"gender"} onChange={event => handleChange(event)}>
                        <option value="gender">Gender</option>
                        <option value="status">Availability of chat</option>
                    </select>
                    </span>
                    <button className="close-icon" onClick={closeModal}><IoMdClose /></button>
                </div>
                
                <hr ></hr>
                {
                    selectOption === 'gender' ? <PieChart
                    series={[
                        {
                            data:genderData
                        }
                    ]}
                    width={350}
                    height={200}
                /> :
                <PieChart
                series={[
                    {
                        data:statusData
                    }
                ]}
                width={350}
                height={200}
            />
                }
                
            </div>
        </div>
    ) 
}
export default StatusModal;