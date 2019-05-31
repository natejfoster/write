import React, { Component } from 'react';

import { auth } from '../util/firebase';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      emailEntered: false,
      email: '',
      pass: ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onEnter = (e) => {
    if (e.keyCode === 13) {
      let curVal = e.target.value;
      if (e.target.name === 'email') {
        this.setState({emailEntered: true, email: curVal});
        e.target.value = '';
      } else if (e.target.name === 'pass') {
        this.props.logIn(this.state.email, this.state.pass);
      }
    }
  }

  render() { 
    let getEmail = 
      <div className='main'>
        <p>
          Day after day we’re barraged by notifications and to-dos. Write is here to relieve the burden that technology places on our lives.
        </p>
        <p>
          Write is a place to breathe, think deeply, and communicate with the ones you love.
        </p>
        <input 
          type='text' 
          placeholder='Ready to Write? Enter your email here' 
          onChange={this.onChange}
          onKeyDown={this.onEnter} 
          name='email' 
          autoFocus
        />
        <h6 className={this.state.email === '' && 'hidden'}>Press enter to continue</h6>
      </div>

    let getPassword = 
      <div className='main'>
        <input 
          type='password'
          placeholder='Please enter your password'
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          name='pass'
          autoFocus
        />
        <h6 className={this.state.pass === '' && 'hidden'}>Press enter to continue</h6>
      </div>

    return (
      <div>
        {
          this.state.emailEntered ? getPassword : getEmail
        }
      </div>
    );
  }
}
 
export default Login;