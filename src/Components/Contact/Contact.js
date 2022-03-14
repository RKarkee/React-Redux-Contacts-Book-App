import React from 'react';
import Avatar from 'react-avatar'
// import '.../styles/App.scss';
// import './styles/App.scss';
import "../../styles/App.scss"

const Contact = ({contact}) => {
    const{ name, phone,email }= contact;
  return (
    <tr>
              <td>
              <div className="custom-control custom-checkbox" >
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label" />
              </div>
            </td>
              <td><Avatar style={{marginRight:"10px"}} name={name} size={35} round={true} />{name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td className='actions'>
                  <a href="#" style={{marginRight:"5px"}} >
                    <span className='material-icons text-primary'>edit</span>
                  </a>
                  <a href="#">
                    <span className='material-icons text-danger'>remove_circle</span>
                  </a>
              </td>
            </tr>
  )
}

export default Contact
