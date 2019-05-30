import React, { Component } from 'react';
import { truncate } from '../util/functions';

import DraftItem from './blocks/draftItem';

import '../css/drafts.scss';

const drafts = [
  {from: 'Ava Davis', to: 'Paul', date: 'May 14, 2019', text: 'Hey, Ava! It’s me, Emma again. I hope your...'},
  {from: 'Logan Miller', to: 'Phillip', date: 'May 1, 2019', text: 'Consider all this; and then turn to the green... '},
  {from: 'Ava Davis', to: 'Saul', date: 'March 23, 2019', text: "Talk not to me of blasphemy, man; I'd strike the.. "},
  {from: 'Ava Davis', to: 'Judas', date: 'March 15, 2019', text: 'And even if he for ever flies within the gorge...'},
  {from: 'Logan Miller', to: 'Peter', date: 'January 21, 2019', text: 'And even if he for ever flies within the gorge...'},
  {from: 'Charlotte Jones', to: 'Paul', date: 'December 25, 2018', text: "It's the easiest thing in the world for a man to..."}
];

class Drafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drafts: drafts
    }
  }

  render() { 
    return (
      <div className='drafts main'>
        {this.state.drafts.map((draft, key) =>
          <DraftItem text={truncate(draft.text)} date={draft.date} key={key} />
        )}
      </div>
    );
  }
}
 
export default Drafts;