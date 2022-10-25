import axios from "axios"
import { GETCONTACTS,GETCONTACT } from "../types"

export const getAllContacts=()=>async(dispatch)=>{
try {
    const res=await axios.get('/api/contacts/allcontacts')
    dispatch({
        type:GETCONTACTS,
        payload:res.data
    })
} catch (error) {
    console.log(error)
}
}

export const addContact=(data)=>async(dispatch)=>{
    try {
        await axios.post('/api/contacts/addcontact',data)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contacts/removecontact/${id}`)
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error) 
    }
}
export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`/api/contacts/contact/${id}`)
        dispatch({
            type:GETCONTACT,
            payload:res.data
        })
    } catch (error) {
        console.log(error) 
    }
}
export const updateContact=(id,data)=>async(dispatch)=>{
    try {
    await axios.put(`/api/contacts/updatecontact/${id}`,data)
    dispatch(getAllContacts())
       
    } catch (error) {
        console.log(error) 
    }
}