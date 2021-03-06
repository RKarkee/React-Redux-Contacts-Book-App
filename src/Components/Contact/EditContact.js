import React, { useState , useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getContact, updateContact } from "../../actions/contactAction";

import { useNavigate, useParams } from "react-router-dom";
// import rootReducer from "../../reducers/index"

const EditContact = () => {
  let { id } = useParams();

  let navigate = useNavigate();
  const contact = useSelector((state)=>state.contacts.contact)
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if(contact!=null){
      setName(contact.name);
      setPhone(contact.phone)
      setEmail(contact.email)
    }
    
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact=(e)=>{
    e.preventDefault();

    const update_contact=Object.assign(contact,{
      name:name,
      phone:phone,
      email:email,})
    // console.log(update_contact)
    dispatch(updateContact(update_contact))
    navigate("/");
  }
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={(e)=>onUpdateContact(e)}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control "
              placeholder="Enter your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              //   aria-label=".form-control-lg example"
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
              required
              className="form-control"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              //   aria-label="default input example"
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              placeholder=" Enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //   aria-label=".form-control-sm example"
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
