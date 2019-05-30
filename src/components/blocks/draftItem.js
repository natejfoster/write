import React from 'react';

const DraftItem = ({text, date}) => {
  return (
    <div className='drafts__draft-item clickable'>
      <h4 className='drafts__draft-item__text'>{text}</h4>
      <h6 className='drafts__draft-item__status'>{date}</h6>
    </div>
  );
}
 
export default DraftItem;