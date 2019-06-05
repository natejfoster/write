import React from 'react';

const DraftItem = ({text, date, onClick}) => {
  return (
    <div className='drafts__draft-item clickable' onClick={onClick}>
      <h4 className='drafts__draft-item__text'>{text}</h4>
      <h6 className='drafts__draft-item__status'>{date}</h6>
    </div>
  );
}
 
export default DraftItem;