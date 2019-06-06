import React from 'react';
import { truncate, formatDate } from '../../util/functions';

const DraftItem = ({text, date, onClick, isCurrent}) => {
  return (
    <div className='drafts__draft-item clickable' onClick={onClick}>
      <h4 className='drafts__draft-item__text'>{truncate(text)}</h4>
      <h6 className='drafts__draft-item__status'>
        {isCurrent ? 'Currently writing' : formatDate(new Date(date)) }
      </h6>
    </div>
  );
}
 
export default DraftItem;