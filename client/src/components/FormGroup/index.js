import React from 'react';

const FormGroup = ({ children }) => {
  return (
    <div className="form-group">{children}</div>
  )
}

const FormBtn = props => {
  return (
    <button className="btn btn-primary" {...props}>
      {props.children}
    </button>
  )
}

export { FormGroup, FormBtn };