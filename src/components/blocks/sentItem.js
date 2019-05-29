import React from 'react';

const SentItem = ({name, date}) => {
  return (
    <div className='sent-item'>
      <h4 className='sent-item__name'>{name}</h4>
      <h6 className='sent-item__date'>{date}</h6>
    </div>
  );
}
 
export default SentItem;