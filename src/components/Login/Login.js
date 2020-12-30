import React, {Component} from "react";
import "./Login.css";
export default class Login extends Component {
  render() {
    // const {btn, accountDetails, LoginSignup} = this.props;
    return (
      <div className='login '>
        <form action='#' method='POST'>
          <p>LOGIN </p>
          <br />
          <div className='form-control'>
            <input className='email' type='email' name='email' id='email' placeholder='Email' />
          </div>
          <br />
          <div className='form-conrrol'>
            <input className='password' type='password' name='password' id='password' placeholder='Password' />
          </div>
          <br />
          <div className='check'>
            <div className='thickMark'>
              <input className='checkbox' type='checkbox' name='check' id='check' />
              <p>RememberMe</p>
            </div>
            <div className='forgot'>
              <p>Forgot Password?</p>
            </div>
          </div>
          <button>Login</button>
          <div className='footer'>
            <a href='#'>Don't have an account?</a>
            <a className='createAccount' href='#'>
              CREATE NEW ACCOUNT
            </a>
          </div>
        </form>
      </div>
    );
  }
}
