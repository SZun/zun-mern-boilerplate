import React from 'react';
import { Button, Icon } from 'react-materialize';
import './ButtonWithIcon.css';

const CustomButton = ({
  icon,
  children,
  onClick,
  right,
  left,
  large,
  type
}) => {
  return (
    <div>
      <Button
        className="custom-button"
        waves="light"
        large={large}
        onClick={onClick}
        type={type}
      >
        {children}
        <Icon right={right} left={left}>
          {icon}
        </Icon>
      </Button>
    </div>
  );
};

export default CustomButton;
