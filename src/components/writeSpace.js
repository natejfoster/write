import React from 'react';
import '../css/write-space.scss';


const WriteSpace = ({onChange}) => {
  return (

    <React.Fragment>
      <div className='write main'>
        <textarea 
          className='write__textarea'
          type='text'
          onChange={onChange}
          autoFocus
          placeholder='Write...'
        />
      </div>
      <div className='write__menu context-menu'>
        <h4>Save Draft</h4>
        <h4>Send</h4>
      </div>
    </React.Fragment>
  );
}
 
export default WriteSpace;