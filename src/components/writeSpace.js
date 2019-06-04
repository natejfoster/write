import React, { Component } from 'react';
import { adjustTextarea } from '../util/functions';

import '../css/write-space.scss';

class WriteSpace extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      curView: 'draft'
     }
     this.textInput = React.createRef();
  }

  switchView = () => {
    console.log('switching view')
  };


  render() { 
    return (
      <React.Fragment>
        <div className='write main'>
          <textarea 
            className='write__textarea'
            type='text'
            onChange={this.props.onChange}
            onKeyUp={e => adjustTextarea(e.target)}
            autoFocus
            placeholder='Write...'
            ref={this.textInput}
          />
        </div>
        <div className='write__menu context-menu'>
          <h4 className='clickable' onClick={this.switchView}>Send</h4>
          <h4 className='clickable' onClick={this.switchView}>Save as a draft</h4>
          <h4 className='clickable write__clear danger' onClick={() => {this.props.startOver(this.textInput.current)}} > Start over</h4>
        </div>
      </React.Fragment>
    );
  }
}
 
export default WriteSpace;

