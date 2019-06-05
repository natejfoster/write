import React, { Component } from 'react';
import { truncate } from '../util/functions';
import { withRouter } from 'react-router-dom';

import DraftItem from './blocks/draftItem';

import '../css/drafts.scss';


class Drafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewing: false,
      curDraft: {}
    }
  }

  selectDraft = (draft) => {
    this.setState({isViewing: true, curDraft: draft});
  }

  delDraft = (key) => {
    console.log('deleting draft');
    this.props.delDraft(key);
    this.setState({isViewing: false, curDraft: {}});
  }

  editDraft = () => {
    this.props.editDraft(this.state.curDraft);
    this.props.history.push('/')
  }

  back = () => {
    this.setState({isViewing: false});
  }

  render() { 
    const { isViewing, curDraft} = this.state; 

    return (
      isViewing ? 
      <React.Fragment>
        <div className='mailbox__list main'>
          <div>{curDraft.text}</div>
        </div>
        <div className='mailbox__menu context-menu'>
          <h4 className='clickable' onClick={this.back}>Back to Drafts</h4>
          <h4 className='clickable' onClick={this.editDraft}>Edit draft</h4>
          <h4 className='clickable danger drafts__delete' onClick={() => this.delDraft(curDraft.key)}>Throw away draft</h4>
        </div>
      </React.Fragment>
    :
      <React.Fragment>
        <div className='drafts main'>
          {this.props.drafts.map((draft, key) =>
            <DraftItem text={truncate(draft.text)} date={draft.date} key={key} onClick={() => this.selectDraft(draft)}/>
          )}
        </div>
      </React.Fragment>
    );
  }
}
 
export default withRouter(Drafts);