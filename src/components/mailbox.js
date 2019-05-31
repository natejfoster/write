import React, { Component } from 'react';

import ReccdItem from './blocks/reccdItem';
import SentItem from './blocks/sentItem';

import '../css/mailbox.scss';

class Mailbox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      curView: 'reccd', 
      reccd: this.props.reccd,
      sent: this.props.sent
    }
  }

  switchView = () => {
    let updatedView = this.state.curView === 'reccd' ? 'sent' : 'reccd';
    this.setState({curView: updatedView});
  }

  render() { 
    const {curView, reccd, sent} = this.state; 
    console.log(reccd);
    let items = [];
    if (curView === 'reccd') {
      items = reccd.map((item, key) => <ReccdItem key={key} name={item.from} date={item.date} />)
    } else {
      items = sent.map((item, key) => <SentItem key={key} name={item.to} date={item.date} />)
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