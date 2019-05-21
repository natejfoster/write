import React from 'react';

import '../css/menu.scss';

const Menu = ({username}) => {
  return (
    <div className='menu'>
      <h4 className='menu__item menu__username'>{username}</h4>
      <h4 className='menu__item'>Write</h4>
      <h4 className='menu__item'>Mailbox</h4>
      <h4 className='menu__item'>Drafts</h4>
      <h4 className='menu__item'>About</h4>
    </div>
  );
}
 
export default Menu;