import { GETCONTACT, GETCONTACTS } from "../types"


const initialState={
    contacts:[],
    contact:null
}
function contactReducer(state=initialState,{type,payload}){
switch(type){
case GETCONTACTS:
    return {...state,contacts:payload}
case GETCONTACT:
    return {...state,contact:payload}
default:
    return state
}
}
export default contactReducer