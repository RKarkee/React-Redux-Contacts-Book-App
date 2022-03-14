import { CREATE_CONTACT } from "../Constant/type"

//actions
export const addContact= (contact)=>{
    return{
        type:CREATE_CONTACT,
        payload: contact,
      }
    }