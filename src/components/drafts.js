import React, { Component } from 'react';
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
    this.props.delDraft(this.state.curDraft.key);
    this.props.history.push('/')
  }

  back = () => {
    this.setState({isViewing: false});
  }

  render() { 
    const { isViewing, curDraft} = this.state; 

    let draftSelected = 
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

    let drafts =
      <React.Fragment>
        <div className='drafts main'>
          {this.props.curLetter !== '' && <DraftItem text={this.props.curLetter} isCurrent />}
          {this.props.drafts.length !== 0 || this.props.curLetter !== '' ? 
            this.props.drafts.map((draft, key) =>
              <DraftItem text={draft.text} date={draft.date} key={key} onClick={() => this.selectDraft(draft)}/>
            )
            :
            <h4 className='inactive'>No Drafts</h4>
          }
        </div>
      </React.Fragment>

    return (
      isViewing ? draftSelected : drafts
    );
  }
}
 
export default withRouter(Drafts);