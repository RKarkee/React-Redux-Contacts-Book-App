import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
// import '.../styles/App.scss';
// import './styles/App.scss';
import "../../styles/App.scss";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input checked={ selectAll } type="checkbox" className="custom-control-input" />
          <label className="custom-control-label" />
        </div>
      </td>
      <td>
        <Avatar
          style={{ marginRight: "10px" }}
          name={name}
          size={35}
          round={true}
        />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`contacts/edit/${id}`} style={{ marginRight: "5px" }}>
          <span className="material-icons text-primary">edit</span>
        </Link>
        
          <span className="material-icons text-danger" onClick={()=> dispatch(deleteContact(id))} style={{cursor:"pointer"}}>remove_circle</span>
              </td>
    </tr>
  );
};

export default Contact;
