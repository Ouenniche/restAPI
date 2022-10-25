import { Box, Button, TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {updateContact} from '../redux/actions/contactActions'

function EditContact() {
    const [contact,setContact]=useState({name:"",email:"",age:""})
    const dispatch=useDispatch()
    const navigate=useNavigate()
const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
}
const contactStore=useSelector(state=>state.contactReducer.contact)

useEffect(()=>{
    setContact({name:contactStore?.name,email:contactStore?.email,age:contactStore?.age})
},[contactStore])

const handleEdit=()=>{
    dispatch(updateContact(contactStore._id,contact))
    navigate('/contacts')
}

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"20px",margin:"50px auto",width:"50%"}}>
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth name="name" value={contact.name} onChange={handleChange} />
      
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth name="email" value={contact.email} onChange={handleChange}/>
      
      <TextField id="outlined-basic" label="Age" variant="outlined" fullWidth name="age" value={contact.age} onChange={handleChange}/>
      <Button variant='contained' fullWidth onClick={handleEdit} >Submit</Button>
    </Box>
  )
}

export default EditContact
