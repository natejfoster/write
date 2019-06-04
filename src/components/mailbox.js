import React, { Component } from 'react';

import ReccdItem from './blocks/reccdItem';
import SentItem from './blocks/sentItem';

import '../css/mailbox.scss';

class Mailbox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      curView: 'reccd'
    }
  }

  switchView = () => {
    let updatedView = this.state.curView === 'reccd' ? 'sent' : 'reccd';
    this.setState({curView: updatedView});
  }

  render() { 
    const {curView} = this.state; 
    let items = [];
    if (curView === 'reccd') {
      items = this.props.reccd.map((item, key) => <ReccdItem key={key} name={item.from} date={item.date} text={item.text} />)
    } else {
      items = this.props.sent.map((item, key) => <SentItem key={key} name={item.to} date={item.date} />)
    } 

    return (
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