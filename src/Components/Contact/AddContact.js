import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import {useNavigate } from "react-router-dom"

const AddContact = () => {
let navigate =useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
        id:shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(addContact(new_contact));
    navigate("/");
    // console.log(name, phone,email);
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
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
          <button type="submit" className="btn btn-primary">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
