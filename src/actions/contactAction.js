import { CREATE_CONTACT, GET_CONTACT } from "../Constant/type"

//actions
export const addContact= (contact)=>{
    return{
        type:CREATE_CONTACT,
        payload: contact,
      }
    }



    //get a cantact
    export const getContact = (id) => ({
      type: GET_CONTACT,
      payload: id,
    })
    