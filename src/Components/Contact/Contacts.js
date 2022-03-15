import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import rootReducer from "../../reducers/index"

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts)
  // console.log(contacts);

  return (
    <div>
      <table className="table table-shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label" />
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
            <Contact contact={ contact } key={contact.id}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
