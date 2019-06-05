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
      curLetter: {}
    }
  }

  switchView = () => {
    let updatedView = this.state.curView === 'reccd' ? 'sent' : 'reccd';
    this.setState({curView: updatedView});
  }

  selectLetter = (letter) => {
    this.setState({isViewing: true, curLetter: letter});
  }

  delLetter = (key) => {
    this.props.delLetter(key);
    this.setState({isViewing: false, curLetter: {}});
  }

  back = () => {
    this.setState({isViewing: false});
  }


  render() { 
    const {curView, isViewing, curLetter} = this.state; 
    let items = [];
    if (curView === 'reccd') {
      items = this.props.reccd.reverse().map((letter, key) => <ReccdItem key={key} from={letter.from} date={letter.date} text={letter.text} onClick={() => this.selectLetter(letter)}/>)
    } else {
      items = this.props.sent.reverse().map((item, key) => <SentItem key={key} name={item.to} date={item.date} />)
    } 

    return (
      isViewing ? 
        <React.Fragment>
          <div className='mailbox__list main'>
            <Letter from={curLetter.from} date={curLetter.date} text={curLetter.text} />
          </div>
          <div className='mailbox__menu context-menu'>
            <h4 className='clickable' onClick={this.back}>Back to Mailbox</h4>
            <h4 className='clickable danger' onClick={() => this.delLetter(curLetter.key)}>Throw away letter</h4>
          </div>
        </React.Fragment>
      :
        <React.Fragment>
          <div className='mailbox__list main'>
            {items}
          </div>
          <div className='mailbox__menu context-menu'>
            <h4 className={`${curView === 'reccd' ? 'active' : ''} clickable`} onClick={this.switchView}>Received</h4>
            <h4 className={`${curView === 'sent' ? 'active' : ''} clickable`} onClick={this.switchView}>Sent</h4>
          </div>
        </React.Fragment>
    );
  }
}
 
export default Mailbox;