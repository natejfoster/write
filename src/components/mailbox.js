import React, { Component } from 'react';

import ReccdItem from './blocks/reccdItem';
import SentItem from './blocks/sentItem';


const sent = [
  {from: 'John', to: 'Paul', date: 'March 31, 2018', text: 'hello hope you are well'},
  {from: 'Mark', to: 'Phillip', date: 'March 27, 2018', text: 'hello hope you are well'},
  {from: 'Matt', to: 'Saul', date: 'March 8, 2018', text: 'hello hope you are well'},
  {from: 'Thomas', to: 'Judas', date: 'March 31, 2018', text: 'hello hope you are well'},
  {from: 'Judas', to: 'Peter', date: 'March 21, 2018', text: 'hello hope you are well'},
  {from: 'Luke', to: 'Paul', date: 'March 5, 2018', text: 'hello hope you are well'},
  {from: 'John', to: 'Luke', date: 'March 1, 2018', text: 'hello hope you are well'},
];

const reccd = [
  {from: 'Ava Davis', to: 'Paul', date: 'May 14, 2019', text: 'hello hope you are well'},
  {from: 'Logan Miller', to: 'Phillip', date: 'May 1, 2019', text: 'hello hope you are well'},
  {from: 'Ava Davis', to: 'Saul', date: 'March 23, 2019', text: 'hello hope you are well'},
  {from: 'Ava Davis', to: 'Judas', date: 'March 15, 2019', text: 'hello hope you are well'},
  {from: 'Logan Miller', to: 'Peter', date: 'January 21, 2019', text: 'hello hope you are well'},
  {from: 'Charlotte Jones', to: 'Paul', date: 'December 25, 2018', text: 'hello hope you are well'}
];

class Mailbox extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      curView: 'sent', 
      reccd: reccd,
      sent: sent
    }
  }

  switchView = () => {
    let updatedView = this.state.curView === 'reccd' ? 'sent' : 'reccd';
    this.setState({curView: updatedView});
  }

  render() { 
    let items = [];
    if (this.state.curView === 'reccd') {
      items = this.state.reccd.map((item, key) => <ReccdItem key={key} name={item.from} date={item.date} />)
    } else {
      items = this.state.sent.map((item, key) => <SentItem key={key} name={item.to} date={item.date} />)
    }

    return (
      <React.Fragment>
        <div className='mailbox__list main'>
          {items}
        </div>
        <div className='mailbox__menu context-menu'>
          <h4 onClick={this.switchView}>Sent</h4>
          <h4 onClick={this.switchView}>Received</h4>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Mailbox;