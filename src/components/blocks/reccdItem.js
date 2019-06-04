import React from 'react';

import { truncate } from '../../util/functions';

const ReccdItem = ({name, date, text}) => {
  return (
    <div className='reccd-item clickable'>
      <span className='reccd-item__name'>{name}</span>
      <span className='reccd-item__date'>{date}</span>
      <p>{truncate(text)}</p>
    </div>
  );
}
 
export default ReccdItem;