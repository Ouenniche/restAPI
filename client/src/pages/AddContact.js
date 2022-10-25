import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addContact} from '../redux/actions/contactActions'

function AddContact() {
    const [contact,setContact]=useState({name:"",email:"",age:""})
    const dispatch=useDispatch()
    const navigate=useNavigate()
const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
}

const handleAdd=()=>{

dispatch(addContact(contact))
navigate('/contacts')
}

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:"20px",margin:"50px auto",width:"50%"}}>
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth name="name" onChange={handleChange} />
      
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth name="email" onChange={handleChange}/>
      
      <TextField id="outlined-basic" label="Age" variant="outlined" fullWidth name="age" onChange={handleChange}/>
      <Button variant='contained' fullWidth onClick={handleAdd}>Submit</Button>
    </Box>
  )
}

export default AddContact
