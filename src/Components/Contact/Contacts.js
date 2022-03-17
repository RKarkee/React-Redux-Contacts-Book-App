import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
// import rootReducer from "../../reducers/index";
import { clearAllContact, selectAllContact } from "../../actions/contactAction";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const dispatch =useDispatch();
  const contacts = useSelector((state) => state.contacts);
  // console.log(contacts);
  const selectedContacts= useSelector((state)=>state.selectedContacts)
  //  var leng=[1,2,3,4,5]
  //  const len =leng.length
  //  console.log(len)
  // const conts = contacts.selectedContacts
  // console.log(conts)
  useEffect(()=>{
    if(selectAll){
      dispatch(selectAllContact(contacts.contacts.map(contact=>contact.id)))
    }
    else{
      dispatch(clearAllContact());
    }
  },[selectAll])
  return (
    <div>
       {/* {
         conts.length>0 ?(
           <button className="btn btn-danger mb-3">Delete all</button>
         ):null

       } */}
      <table className="table table-shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={ selectAll }
                  onClick={ () => setSelectAll(!selectAll)}
                />
                <label 
                // htmlFor="selectAll"
                 className="custom-control-label" />
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
