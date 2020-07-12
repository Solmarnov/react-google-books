import React from 'react';

const Label = props => {
  return (
    <label htmlFor={props.for}>
      {props.children}
    </label>
  );
}

const Input = props => {
  return (
    <input className="form-control" {...props} />
  );
}

const TextArea = props => {
  return <textarea className="form-control" rows="20" {...props} />
}

const Small = props => {
  return (
    <small className="form-text text-muted" id={props.id}>
      {props.children}
    </small>
  );
}

export { Label, Input, TextArea, Small };