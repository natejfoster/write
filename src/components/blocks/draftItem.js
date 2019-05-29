import React from 'react';

const DraftItem = ({text, date}) => {
  return (
    <div className='drafts__draft-item'>
      <h4>{text}</h4>
      <h6>{date}</h6>
    </div>
  );
}
 
export default DraftItem;