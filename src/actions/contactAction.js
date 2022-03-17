import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../Constant/type";

//actions
export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

//get a cantact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update a contact

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

//delete a contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload:id,
});

//select all contact
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload:id,
});

//clear all selected contacts

export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
})

