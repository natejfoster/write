import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

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
    this.textInput = React.createRef();
  }

  toggleNewUser = () => {
    this.setState((state) => ({newUser: !state.newUser}))
    this.textInput.current.focus();
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

  back = () => {
    this.setState({
      newUser: false,
      emailEntered: false,
      passEntered: false,
      email: '',
      pass: '',
      name: ''
    }, () => this.textInput.current.focus())
  }

  render() { 
    const getEmail = 
      <div>
        <input 
          type='text' 
          placeholder={this.state.newUser ? 'Type your email to sign up' : 'Type your email to log in'}
          onChange={this.onChange}
          onKeyDown={this.onEnter} 
          name='email' 
          autoFocus
          ref={this.textInput}
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

    const passwordInfo = 
      <h6 className='inactive'>
        Passwords must contain at least one: Uppercase Letter, Lowercase Letter, Number, and Symbol
      </h6>

    const getPassword = 
      <div>
        <input 
          type='password'
          placeholder='Type Password'
          onChange={this.onChange}
          onKeyDown={this.onEnter}
          name='pass'
          autoFocus
        />
        {this.state.newUser && passwordInfo}
        {this.state.pass !== '' && <h6>{this.state.newUser ? 'Press enter to sign up' : 'Press enter to sign in'}</h6>}
      </div>


    const getName = 
      <div>
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

    const menu =
      <div className='menu landing__menu'>
        <h6 className='clickable' onClick={this.back}>Back to home</h6>
      </div>


    return (
      <React.Fragment>
          <MediaQuery query="(max-device-width: 768px)">
            <div className='main landing'>
              <p>Write is an experience best enjoyed on a larger screen. </p>
              <p>Visit soon!</p>
              <p>
                What is Write?<br />By bringing reflection and connection into an online letter writing space space, Write reclaims the meaning lost in digital communication. 
              </p>
              <p>
                Letter writing is reflective and connecting for both the reader and writer. It’s a unique opportunity to reflect on yourself, discover more about someone else, and focus on expressing yourself through writing. Physically writing a letter is time consuming and associated with insecurities like bad handwriting and poor writing skills. On the other hand, digital communication is temporary and lacks meaning. Write makes it easy to send and receive meaningful communication not intermixed with the other to-dos and logistics cluttering our email inboxes, text histories, and voicemails. 
              </p>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-device-width: 769px)'>
            <div className='main landing'>
              <p>
                Write helps you communicate with the people you love.
              </p>
              <p>
                By bringing reflection, discovery, and expression together in an online space, Write reclaims the meaning and clarity lost in digital communication.
              </p>
              {
                this.state.emailEntered ? this.state.passEntered ? getName : getPassword : getEmail
              }
            </div>
            {this.state.emailEntered && menu}
          </MediaQuery>
      </React.Fragment>
    );
  }
}
 
export default Landing;