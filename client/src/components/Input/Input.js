import React from 'react';
import { Input, Icon } from 'react-materialize';
import './Input.css';

const TextInput = ({ vals, onChange }) => {
  const { placeholder, label, type, s, error, value, name, icon } = vals;
  return (
    <div>
      <Input
        placeholder={placeholder}
        label={label}
        type={type}
        s={s}
        name={name}
        value={value}
        onChange={onChange}
        style={
          error
            ? {
                backgroundColor: '#d49292',
                border: '1px solid #FF0000'
              }
            : null
        }
      >
        <Icon>{icon}</Icon>
      </Input>
      <div className="err">{error}</div>
    </div>
  );
};

export default TextInput;
