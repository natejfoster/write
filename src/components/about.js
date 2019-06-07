import React, { Component } from 'react';
import '../css/about.scss'


class About extends Component {
  state = { onPrivacy: false }

  switchView = () => {
    console.log('switching');
    this.setState({onPrivacy: !this.state.onPrivacy})
  }

  render() { 
    let about = 
      <React.Fragment>
        <div className='about main'>
          <p className='about__paragraph'>
            Write helps you communicate with the people you love.
          </p> 
          <p className='about__paragraph'>
            By bringing reflection and connection into an online letter writing space space, Write reclaims the meaning lost in digital communication. 
          </p>
          <p className='about__paragraph'>
            Letter writing is reflective and connecting for both the reader and writer. It’s a unique opportunity to reflect on yourself, discover more about someone else, and focus on expressing yourself through writing. Physically writing a letter is time consuming and associated with insecurities like bad handwriting and poor writing skills. On the other hand, digital communication is temporary and lacks meaning. Write makes it easy to send and receive meaningful communication not intermixed with the other to-dos and logistics cluttering our email inboxes, text histories, and voicemails. 
          </p>
          <p className='about__paragraph'>
            To help you write letters, Write prompts you periodically with self-reflective questions to ask yourself and to ask people around you. Once you send a letter with Write, it will be delivered at a random moment within seven days after sending. When someone knows the exact moment a message was delivered and seen, an expectation for a hasty response is placed on both the sender and receiver.  By delivering letters serendipitously, Write creates a space for reflecting on the content of the letter. 
          </p>
        </div>
        <div className='context-menu'>
          <h4 className='clickable' onClick={this.switchView}>Privacy Statement</h4>
        </div>
      </React.Fragment>

    let privacy = 
      <React.Fragment>
        <div className='about main'>
          <p className='about__paragraph'>
            This is some info about the privacy stuff yada yada yada
          </p> 
          <p className='about__paragraph'>
            Write is built using blah blah blah
          </p> 
        </div>
        <div className='context-menu'>
          <h4 className='clickable' onClick={this.switchView}>Back to about</h4>
        </div>
      </React.Fragment>

    return (this.state.onPrivacy ? privacy : about);
  }
}
 
export default About;





