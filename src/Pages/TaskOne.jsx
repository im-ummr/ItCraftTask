import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addRecord, deleteRecord, updateRecord } from '../Redux/Slices/AddRecordSlice';
import { Table, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import { useSelector } from 'react-redux';
import TableComponent from '../Components/TableComponent';

function TaskOne() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records);
  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
  });
  const columns = ['#', 'First Name', 'Last Name', 'Email', 'Phone', 'City', 'Actions'];

  const toggle = () => {setModal(!modal) ; setEmptyFields(false)};

  const handleAddRecord = () => {
    const emptyFieldsArray = Object.values(formData).some((value) => value === '')
    setEmptyFields(emptyFieldsArray);
    if (!emptyFieldsArray) {
      dispatch(addRecord(formData));
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
      });
      setModal(false)
      setEmptyFields(false)
    }
  };

  const handleDeleteRecord = (recordIndex) => {
    dispatch(deleteRecord(recordIndex));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setEmptyFields(false)
  };

const handleInputEditChange = (e, index) => {
  const {value, name} = e.target;
  setEditIndex(index)
  setFormData(()=> {
 return {
  ...records[index],
  [name]: value
 }
  })
}

 const handleEditUser = () => {
  setIsEditing(true)
 }
 const handleOnBlur = () => {
  dispatch(updateRecord({index:editIndex, updatedRecord :formData}));
  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
  });
 }
  return (
    <div className='min-h-screen max-h-full w-full bg-[#D9D9D9] flex justify-center items-center'>
      <div className='min-h-[60%] max-h-fit w-[90%] bg-[#2196F3] flex flex-col items-center gap-[40px] pb-[40px]'>
        <Table>
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, recordIndex) => (
              <tr key={recordIndex} className="text-center">
                <td>{recordIndex + 1}</td>
                <td  onDoubleClick={handleEditUser}>{!isEditing ? record?.firstName : <input type='text' name='firstName' defaultValue={record.firstName} onChange={(e)=>handleInputEditChange(e, recordIndex)} onBlur={handleOnBlur} />}</td>
                <td  onDoubleClick={handleEditUser}>{!isEditing ? record?.lastName : <input type='text' name='lastName' defaultValue={record.lastName} onChange={(e)=>handleInputEditChange(e, recordIndex)} onBlur={handleOnBlur} />}</td>
                <td  onDoubleClick={handleEditUser}>{!isEditing ? record?.email : <input type='email' name='email' defaultValue={record.email} onChange={(e)=>handleInputEditChange(e, recordIndex)} onBlur={handleOnBlur} />}</td>
                <td  onDoubleClick={handleEditUser}>{!isEditing ? record?.phone : <input type='number' name='phone' defaultValue={record.phone} onChange={(e)=>handleInputEditChange(e, recordIndex)} onBlur={handleOnBlur} />}</td>
                <td  onDoubleClick={handleEditUser}>{!isEditing ? record?.city : <input type='city' name='city' defaultValue={record.city} onChange={(e)=>handleInputEditChange(e, recordIndex)} onBlur={handleOnBlur} />}</td>
                <td> <Badge color="danger" className='cursor-pointer' onClick={() => handleDeleteRecord(recordIndex)}>Delete</Badge></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <Button class="btn btn-success" onClick={toggle}>Add New Record</Button>
          <Modal isOpen={modal} fade={false} toggle={toggle} type='danger'>
            <ModalHeader toggle={toggle}>Add New Record</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="text" value={formData.firstName}
                    onChange={handleInputChange} name="firstName" id="firstName" placeholder="write first name" 
                   
                    />
                    
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="text" value={formData.lastName}
                    onChange={handleInputChange} name="lastName" id="lastName" placeholder="write last name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" value={formData.email}
                    onChange={handleInputChange} name="email" id="email" placeholder="write your email" />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input type="number" value={formData.phone}
                    onChange={handleInputChange} name="phone" id="phone" placeholder="write your phone" />
                </FormGroup>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input type="city" value={formData.city}
                    onChange={handleInputChange} name="city" id="city" placeholder="write your city" />
                </FormGroup>
                {emptyFields && <span className='text-[red] text-[12px]  text-center'> Fill All Fields
                </span>}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button type= "success" color="btn btn-success" onClick={handleAddRecord}>
                Save
              </Button>
              <Button type= "danger" color="btn btn-danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

      </div>


    </div>
  )
}

export default TaskOne
