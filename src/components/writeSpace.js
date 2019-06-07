import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

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
      isSaving: false
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
    //wait for a bit, then load into get email page
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


  render() { 
    let {letter, email, isSaving, isSending} = this.state;

    let showMenu = this.props.text !== '';

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
          {isSaving && <h6>Saved as draft</h6>}
        </div>
        {showMenu &&
          <div className='write__menu context-menu'>
            <h4 className='clickable' onClick={() => this.sendFlow()}>Send</h4>
            <h4 className='clickable' onClick={this.saveDraft}>Save as a draft</h4>
            <h4 className='clickable write__clear danger' onClick={() => {this.props.startOver(this.textInput.current)}}>Start over</h4>
          </div>
        }
      </React.Fragment>

    let preSend = 
      <div className='write main'>
        <div className='letter'>{letter}</div>
      </div>

    let enterEmail =
      <div className='write main'>
        <div className='letter'>
          <input autoFocus type='text' placeholder='Email' onChange={(e) => this.getEmail(e)}/>
          <h4>Who would you like to send this letter to?</h4>
          {this.state.email !== '' && <h6 className='clickable' onClick={() => this.sendLetter(letter, email)}>Click here to send</h6>}
        </div>
      </div>

    let sent = 
    <div className='write main'>
      <div className='letter'>
        <h4>Sent!</h4>
      </div>
    </div>


    let send =
      <React.Fragment>
        {this.state.preSend ? preSend : this.state.sent ? sent : enterEmail}
        <div className='write__menu context-menu'>
          <h4 className='active'>Send</h4>
          <h4 className='clickable danger' onClick={this.cancel}>Cancel</h4>
        </div>
      </React.Fragment>

    return (
      isSending ? send : draft
    );
  }
}
 
export default WriteSpace;

