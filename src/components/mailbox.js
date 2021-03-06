import React, { Component } from 'react';

import ReccdItem from './blocks/reccdItem';
import SentItem from './blocks/sentItem';
import Letter from './blocks/letter';

import '../css/mailbox.scss';

class Mailbox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      curView: 'reccd',
      isViewing: false,
      isDeleting: false,
      curLetter: {}
    }
  }

  switchView = (e) => {
    let updatedView = e.target.getAttribute('name');
    this.setState({curView: updatedView});
  }

  selectLetter = (letter) => {
    console.log(letter);
    this.setState({isViewing: true, curLetter: letter});
  }

  initDelete = () => {
    this.setState({isDeleting: true});
  }

  delLetter = (key) => {
    this.props.delLetter(key);
    this.setState({isViewing: false, isDeleting: false, curLetter: {}});
  }


  back = () => {
    this.setState({isViewing: false});
  }

  cancelDelete = () => {
    this.setState({isDeleting: false});
  }


  render() { 
    const {curView, isViewing, isDeleting, curLetter} = this.state; 
    let items = [];
    let sent = [...this.props.sent];
    let reccd = [...this.props.reccd];

    if (curView === 'reccd') {
      items = reccd.reverse().map((letter, key) => <ReccdItem key={key} from={letter.from} date={letter.date} text={letter.text} onClick={() => this.selectLetter(letter)}/>)
    } else {
      items = 
        <div className='mailbox__sent'>
          {sent.reverse().map((item, key) => <SentItem key={key} name={item.to} date={item.date} />)}
        </div>
    } 

    const deleteMenu = 
      <React.Fragment>
        <h6 className='clickable space--between' onClick={this.cancelDelete}>Don't throw away</h6>
        <h6 className='clickable danger' onClick={() => this.delLetter(curLetter.key)}>Click to throw away</h6>
      </React.Fragment>


    return (
      isViewing ? 
        <React.Fragment>
          <div className='mailbox__list main'>
            <Letter from={curLetter.from} date={curLetter.date} fromEmail={curLetter.fromEmail} text={curLetter.text} />
          </div>
          <div className='mailbox__menu context-menu'>
            <h6 className='clickable' onClick={this.back}>Back to Mailbox</h6>
            {isDeleting ? 
              deleteMenu : <h6 className='clickable danger space--between' onClick={this.initDelete}>Throw away letter</h6>
            }
          </div>
        </React.Fragment>
      :
        <React.Fragment>
          <div className='mailbox__list main'>
            {items.length !== 0 ? items : <h4 className='inactive'>No Messages</h4>}
          </div>
          <div className='mailbox__menu context-menu'>
            <h6 name='reccd' className={`${curView === 'reccd' ? 'active' : ''} clickable`} onClick={(e) => this.switchView(e)} >Received</h6>
            <h6 name='sent' className={`${curView === 'sent' ? 'active' : ''} clickable`} onClick={(e) => this.switchView(e)} >Sent</h6>
          </div>
        </React.Fragment>
    );
  }
}
 
export default Mailbox;