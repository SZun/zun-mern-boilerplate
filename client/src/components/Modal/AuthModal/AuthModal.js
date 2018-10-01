import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';
import {
  loginUser,
  registerUser,
  clearErrors
} from '../../../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import store from '../../../store/index';
import asyncComponent from '../../../utils/asyncComponent';

// Lazy Loading Components
const Modal = asyncComponent(() => import('../Modal'));
const Input = asyncComponent(() => import('../../Input/Input'));
const AuthBtn = asyncComponent(() => import('./AuthBtn'));

class AuthModal extends Component {
  initialState = {
    login: true,
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    errors: {}
  };

  state = this.initialState;

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { loginUser, history, registerUser } = this.props;
    const { password, email, confirmPassword, login, name } = this.state;
    const userData = login
      ? { email, password }
      : { password, email, confirmPassword, name };
    login ? loginUser(userData, history) : registerUser(userData, history);
  };

  chooseAuth = isLogin => {
    store.dispatch(clearErrors());
    isLogin ? this.setState({ login: true }) : this.setState({ login: false });
  };

  render() {
    const {
      name,
      password,
      email,
      errors,
      login,
      confirmPassword
    } = this.state;

    const inputData = login
      ? [
          {
            placeholder: 'email@domain.com',
            label: 'Email',
            type: 'email',
            s: 12,
            value: email,
            name: 'email',
            error: errors.email ? errors.email : null,
            icon: 'email'
          },
          {
            placeholder: 'Passw0rd!',
            label: 'Password',
            type: 'password',
            s: 12,
            value: password,
            name: 'password',
            error: errors.password ? errors.password : null,
            icon: 'lock_outline'
          }
        ]
      : [
          {
            placeholder: 'Your Name',
            label: 'Name',
            type: 'text',
            s: 12,
            value: name,
            name: 'name',
            error: errors.name ? errors.name : null,
            icon: 'face'
          },
          {
            placeholder: 'email@domain.com',
            label: 'Email',
            type: 'email',
            s: 12,
            value: email,
            name: 'email',
            error: errors.email ? errors.email : null,
            icon: 'email'
          },
          {
            placeholder: 'Passw0rd!',
            label: 'Password',
            type: 'password',
            name: 'password',
            s: 12,
            value: password,
            error: errors.password ? errors.password : null,
            icon: 'lock_outline'
          },
          {
            placeholder: 'Passw0rd!',
            label: 'Confirm Password',
            type: 'password',
            name: 'confirmPassword',
            s: 12,
            value: confirmPassword,
            error: errors.confirmPassword ? errors.confirmPassword : null,
            icon: 'lock_outline'
          }
        ];

    const inputContent = inputData.map(i => (
      <Input
        vals={i}
        onChange={this.onChangeHandler}
        key={inputData.indexOf(i)}
      />
    ));

    const btnVals = [
      {
        s: 6,
        val: true,
        icon: 'subdirectory_arrow_left',
        text: 'LOGIN'
      },
      {
        s: 6,
        val: false,
        icon: 'reply',
        text: 'REGISTER'
      }
    ];

    const btnContent = btnVals.map(i => (
      <AuthBtn
        vals={i}
        onClick={() => this.chooseAuth(i.val)}
        key={btnVals.indexOf(i)}
      />
    ));

    return (
      <Modal
        header={login ? 'Login' : 'Register'}
        trigger={
          <div className="container">
            <Row>
              <Col s={5} />
              <Col s={2}>
                <Button>LOGIN/REGISTER</Button>
              </Col>
              <Col s={5} />
            </Row>
          </div>
        }
      >
        <div className="container">
          <Row>
            {btnContent}
            {inputContent}
            <AuthBtn
              onClick={e => this.onSubmitHandler(e)}
              vals={{
                icon: 'check',
                text: 'Submit',
                s: 12
              }}
            />
          </Row>
        </div>
      </Modal>
    );
  }
}

AuthModal.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, registerUser, clearErrors }
)(withRouter(AuthModal));
