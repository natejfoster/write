import React, { Component } from 'react';

import { auth } from '../util/firebase';

import '../css/landing.scss';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      newUser: false,
      emailEntered: false,
      passEntered: false,
      email: '',
      pass: '',
      name: ''
    }
  }

  toggleNewUser = () => {
    this.setState((state) => ({newUser: !state.newUser}))
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
      } else if (!this.state.newUser && e.target.name === 'pass') {
        this.props.logIn(this.state.email, this.state.pass);
      } else if (e.target.name === 'pass') {
        this.setState({passEntered: true, pass: curVal});
        e.target.value = '';
      } else {
        this.props.signUp(this.state.email, this.state.pass, this.state.name)
      }
    }
  }

  render() { 
    const getEmail = 
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
        {this.state.email !== '' && <h6>{this.state.newUser ? 
          'Welcome to Write Press enter to continue.'
          : 
          'Press enter to continue'}</h6>
        }
        <h6 className='clickable landing__sign-in-up' onClick={this.toggleNewUser}>
          {this.state.newUser ?
            'Returning user? Click to log in'
            :
            'New user? Click to sign up'
          }
        </h6>
      </div>

    const getPassword = 
      <div className='main'>
        <input 
          type='password'
          placeholder='Please enter your password'
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          name='pass'
          autoFocus
        />
        {this.state.pass !== '' && <h6>Press enter to continue</h6>}
      </div>


    const getName = 
      <div className='main'>
        <input 
          type='text' 
          placeholder='What is your full name?' 
          onChange={this.onChange}
          onKeyDown={this.onEnter} 
          name='name' 
          autoFocus
        />
        {this.state.name !== '' && <h6>Press enter to continue</h6>}
      </div>

    return (
      <div>
        {
          this.state.emailEntered ? this.state.passEntered ? getName : getPassword : getEmail
        }
      </div>
    );
  }
}
 
export default Landing;