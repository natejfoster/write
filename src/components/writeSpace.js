import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import { formatLetter } from '../util/functions';

import '../css/write-space.scss';

class WriteSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      letter: '',
      email: '',
      isSending: false,
      preSend: true,
      sent: false,
      isSaving: false,
      isDeleting: false
     }
     this.textInput = React.createRef();
  }

  saveDraft = () => {
    this.props.saveDraft(this.textInput.current.value);
    this.setState({isSaving: true});
    window.setTimeout(() => {
      this.setState({isSaving: false});
      this.textInput.current.value = '';
    }, 2000)
  }

  sendFlow = () => {
    this.setState({isSending: true, letter: this.textInput.current.value})
    window.setTimeout(() => this.setState({preSend: false}), 2000)
  };

  sendLetter = (letter, email) => {
    this.props.send(letter, email);
    this.setState({sent: true});
    window.setTimeout(() => {
      this.setState({
        letter: '',
        email: '',
        isSending: false,
        preSend: true,
        sent: false
      });
      this.textInput.current.value = '';
    }, 2000)
  };

  getEmail = (e) => {
    this.setState({email: e.target.value})
  };

  cancel = () => {
    this.setState({email: '', isSending: false, preSend: true, sent: false}, () => {
      this.textInput.current.focus();
    });
  }

  initStartOver = () => {
    this.setState({isDeleting: true});
  }

  startOver = (text) => {
    this.props.startOver(text);
    this.setState({isDeleting: false});
  }

  cancelStartOver = () => {
    this.setState({isDeleting: false});
  }

  render() { 
    let {letter, email, isSaving, isSending, isDeleting} = this.state;

    let showMenu = this.props.text !== '';

    let deleteMenu = 
      <React.Fragment>
        <h6 className='clickable space--between' onClick={this.cancelStartOver}>Don't start over</h6>
        <h6 className='clickable danger' onClick={() => this.startOver(this.textInput.current)}>Click to start over</h6>
      </React.Fragment>


    let draft = 
      <React.Fragment>
        <div className='write main'>
          <Textarea 
            value={this.props.text && this.props.text}
            className='write__textarea'
            type='text'
            onChange={this.props.onChange}
            autoFocus
            placeholder='Write'
            inputRef={this.textInput}
          />
          {isSaving && <h6 className='write__saved'>Saved as draft</h6>}
        </div>
        {showMenu &&
          <div className='write__menu context-menu'>
            <h6 className='clickable' onClick={() => this.sendFlow()}>Send</h6>
            <h6 className='clickable' onClick={this.saveDraft}>Save as a draft</h6>
            {isDeleting ? 
              deleteMenu
            :
              <h6 className='clickable write__clear danger' onClick={this.initStartOver}>Start over</h6>
            }
          </div>
        }
      </React.Fragment>

    let preSend = 
      <div className='write main'>
        <div className='write__send letter--wrapper'><p>{letter}</p></div>
      </div>

    let enterEmail =
      <div className='write main'>
        <div className='write__send'>
          <input autoFocus type='text' placeholder='Email' onChange={(e) => this.getEmail(e)}/>
          <h4>Who would you like to send this letter to?</h4>
          {this.state.email !== '' && <h6 className='clickable' onClick={() => this.sendLetter(letter, email)}>Click here to send</h6>}
        </div>
      </div>

    let sent = 
    <div className='write main'>
      <div className='write__send'>
        <h4>Sent!</h4>
      </div>
    </div>


    let send =
      <React.Fragment>
        {this.state.preSend ? preSend : this.state.sent ? sent : enterEmail}
        <div className='write__menu context-menu'>
          <h6 className='active'>Send</h6>
          <h6 className='clickable danger write__cancel' onClick={this.cancel}>Cancel</h6>
        </div>
      </React.Fragment>

    return (
      isSending ? send : draft
    );
  }
}
 
export default WriteSpace;

