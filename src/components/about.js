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
            <em>Write</em> helps you communicate with the people you love.
          </p> 
          <p className='about__paragraph'>
            By bringing reflection, discovery, and expression together in an online space, <em>Write</em> reclaims the meaning and clarity lost in digital communication.
          </p>
          <p className='about__paragraph'>
            Letter writing is a unique opportunity to reflect, discover, and express. Physically writing a letter is time consuming and associated with insecurities like bad handwriting and poor writing skills. On the other hand, digital communication is temporary and lacks meaning. <em>Write</em> makes it easy to send and receive meaningful communication not intermixed with the other to-dos and logistics cluttering our email inboxes, text histories, and voicemails. 
          </p>
          <p className='about__paragraph'>
            If you’re feeling stuck while writing, <em>Write</em> prompts you with self-reflective questions to ask yourself and your loved ones. Once you send a letter with <em>Write</em>, it will be delivered at a random moment within seven days after sending. When someone knows the exact moment a message was delivered and seen, an expectation for a hasty response is placed on both the sender and receiver. By delivering letters serendipitously, <em>Write</em> creates a space for reflecting on the content of the letter. 
          </p>
          <p className='about_paragraph'>
            <em>Write</em> is a project designed by <span className='about__credit clickable'><a target='_blank' href='https://mattwright.design'>Matt Wright</a></span> and developed by <span className='about__credit clickable'><a target='_blank' href='https://www.nathanjfoster.com'>Nathan Foster</a></span>. 
          </p>
        </div>
        <div className='context-menu'>
          {/* <h6 className='clickable' onClick={this.switchView}>Privacy Statement</h6> */}
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
          <h6 className='clickable' onClick={this.switchView}>Back to about</h6>
        </div>
      </React.Fragment>

    return (about);
  }
}
 
export default About;





