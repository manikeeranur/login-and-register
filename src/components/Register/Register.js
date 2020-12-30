import React, {Component} from "react";
import "./Register.css";
export default class Register extends Component {
  render() {
    return (
      <div className='register '>
        <form action='#' method='POST'>
          <p>REGISTER </p>
          <br />
          <div className='form-control'>
            <input className='name' type='text' name='name' id='name' placeholder='Name' />
          </div>

          <div className='form-control'>
            <input className='email' type='email' name='email' id='email' placeholder='Email' />
          </div>

          <div className='form-control'>
            <input className='password' type='password' name='password' id='password' placeholder='Password' />
          </div>

          <div className='form-control'>
            <input className='confirmPassword' type='password' name='confirmPassword' id='confirmPassword' placeholder='Re-enter Password' />
          </div>

          <button>Register</button>
          <div className='footer'>
            <a href='#'>Already have an account?</a>
            <a className='createAccount' href='#'>
              SIGN IN
            </a>
          </div>
        </form>
      </div>
    );
  }
}
