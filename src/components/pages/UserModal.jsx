import "./UserModal.css";
import react from "react";
import { IoMdClose } from "react-icons/io";

export const UserModal = ({ closeModal,onSubmit, defaultValue, action }) => {

    const [formState, setFormState] = react.useState(defaultValue || {
        name : "",
        email : "",
        gender : "male",
        status: "active"
    });
    const validateForm = () =>{
        if(formState.name && formState.email && formState.gender && formState.status){
            return true
        }
        else{
            return false
        }
    };
    
    const handleChange = (e,idx) => {
       if(idx==="name"){
            setFormState({
                ...formState,
                name:e.target.value
            })
        }
        else if(idx==='email') {
            setFormState({
                ...formState,
                email:e.target.value
            })
        }
        else if(idx==='gender') {
            setFormState({
                ...formState,
                gender:e.target.value
            })
        }
        else if(idx==='active') {
            setFormState({
                ...formState,
                status:"active"
            })
        }
        else if(idx==='inactive') {
            setFormState({
                ...formState,
                status:"inactive"
            })
        }
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState);
        closeModal();
    }
    return (
        <div className="modal-container" onClick={(e) => {
            if(e.target.className === "modal-container") closeModal()
            }}
        >
            <div className="modals">
                <div className="modals-heading">
                    <span>Add a new creator</span>
                    <button className="close-icon" onClick={closeModal}><IoMdClose /></button>
                </div>
                
                <hr ></hr>
                <form >
                    <div className="modals-form-group">
                        <label className="models-label" htmlFor="name">Creator Name</label>
                        <input name="name" defaultValue={formState.name} onChange={event => handleChange(event,"name")}></input>
                    </div>
                    <div className="modals-form-group">
                        <label className="models-label" htmlFor="email">Email</label>
                        <input type="email" name="email" defaultValue={formState.email} onChange={event => handleChange(event,"email")}></input>
                    </div>
                    <div className="modals-form-group">
                        <label className="models-label" htmlFor="gender">Gender</label>
                        <select name="gender" defaultValue={formState.gender} onChange={event => handleChange(event,"gender")}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div> 
                    <div className="modals-form-group">
                    <label className="models-label" htmlFor="status">Available for chat</label>
                        <div class="radio-button-group">
                            <div className="radioButton">
                       <input
                            type="radio"
                            id="option1"
                            defaultValue={formState.status}
                            checked={
                                formState.status ===
                                "active"
                            }
                            onChange={event => handleChange(event,"active") 
                            
                            }
                        />
                         <label
                            htmlFor="option1"
                            className="modalRadioLabel"
                        >
                            Active
                        </label>
                        </div>
                        <div className="radioButton">
                        <input
                            type="radio"
                            id="option2"
                            defaultValue={formState.status}
                            checked={
                                formState.status ===
                                "inactive"
                            }
                            onChange={event => handleChange(event,"inactive")
                            
                            
                            }
                        />
                         <label
                            htmlFor="option2"
                            className="modalRadioLabel"
                        >
                            Inactive
                        </label>
                        </div>
                        </div>
                    </div>
                    {
                        action === 'add' ? <button className="add-button" type="submit" onClick={handleSubmit}>+ Add creator</button> : <button className="add-button" type="submit" onClick={handleSubmit}>Edit creator</button>
                    }
                    
                </form>
                
            </div>
        </div>
    ) 
}
export default UserModal;