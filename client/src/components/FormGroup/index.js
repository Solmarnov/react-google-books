import React from 'react';

const FormGroup = ({ children }) => {
  return (
    <div className="form-group">{children}</div>
  )
}

const FormBtn = props => {
  return (
    <button className={`btn btn-secondary ${props.float}`} id={props.id}>
      {props.children}
    </button>
  )
}

export { FormGroup, FormBtn };