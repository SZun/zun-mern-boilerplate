import React from 'react';
import { Col } from 'react-materialize';
import asyncComponent from '../../../utils/asyncComponent';

// Lazy Loading Component
const ButtonWithIcon = asyncComponent(() =>
  import('../../Button/ButtonWithIcon/ButtonWithIcon')
);

const AuthBtn = ({ vals, onClick }) => {
  const { s, icon, text } = vals;
  return (
    <Col s={s}>
      <ButtonWithIcon onClick={onClick} icon={icon} right large>
        {text}
      </ButtonWithIcon>
    </Col>
  );
};

export default AuthBtn;
