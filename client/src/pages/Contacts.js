import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ContactCard from '../components/ContactCard'
import { getAllContacts } from '../redux/actions/contactActions'

function Contacts() {
  const contacts=useSelector(state=>state.contactReducer.contacts)
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getAllContacts())
  },[])
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"90%",margin:"50px auto",gap:"30px"}}>

     {
      contacts.map(contact=>
        <ContactCard contact={contact} key={contact._id} />
        )
     }
    </Box>
  )
}

export default Contacts
