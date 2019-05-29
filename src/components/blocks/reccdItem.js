import React from 'react';

const ReccdItem = ({name, date}) => {
  return (
    <div className='reccd-item'>
      <span className='reccd-item__name'>{name}</span>
      <span className='reccd-item__date'>{date}</span>
    </div>
  );
}
 
export default ReccdItem;