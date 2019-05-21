import React from 'react';
import '../css/write-space.scss';


const WriteSpace = ({onChange}) => {
  return (
    <div className='write-space'>
      <textarea 
        className='write-space__textarea'
        type='text'
        onChange={onChange}
        autoFocus
        placeholder='Write...'
      />
    </div>
  );
}
 
export default WriteSpace;