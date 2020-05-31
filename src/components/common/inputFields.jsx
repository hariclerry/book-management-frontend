import React, { Fragment } from "react";

const InputField = ({
  htmlFor,
  label,
  type,
  value,
  onChange,
  className,
  id,
  name
}) => {
  return (
    <Fragment>
      <label htmlFor={htmlFor}>
        <b>{label}</b>
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
        required
      />
    </Fragment>
  );
};

export default InputField;
