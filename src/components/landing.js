import React, { Component } from 'react';

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
      <div>
        <input 
          type='text' 
          placeholder='Type your email to log in' 
          onChange={this.onChange}
          onKeyDown={this.onEnter} 
          name='email' 
          autoFocus
        />
        {this.state.email !== '' && <h6>{this.state.newUser ? 
          'Welcome to Write! Press enter to continue.'
          : 
          'Welcome! Press enter to continue'}</h6>
        }
        <h6 className='clickable landing__sign-in-up' onClick={this.toggleNewUser}>
          {this.state.newUser ?
            'Returning user? Click to log in'
            :
            'or, click here to create an account'
          }
        </h6>
      </div>

    const getPassword = 
      <div>
        <input 
          type='password'
          placeholder='Type password'
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          name='pass'
          autoFocus
        />
        {this.state.pass !== '' && <h6>Press enter to continue</h6>}
      </div>


    const getName = 
      <div className>
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
      <div className='main'>
        <p>
          Write helps you communicate with the people you love.
        </p>
        <p>
          Letter writing is reflective and connecting for both the reader and writer. It’s a unique opportunity to reflect, discover more about someone else, and focus on expressing yourself through writing. By bringing reflection and connection into an online letter writing space, Write reclaims the meaning lost in digital communication.
        </p>
        {
          this.state.emailEntered ? this.state.passEntered ? getName : getPassword : getEmail
        }
      </div>
    );
  }
}
 
export default Landing;