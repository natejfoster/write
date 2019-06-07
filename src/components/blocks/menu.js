import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../util/routes';


import '../../css/menu.scss';

const Menu = ({username}) => {
  return (
    <div className='menu'>
      <h4 className='menu__username'><NavLink to={ROUTES.PROFILE} className='clickable'>{username}</NavLink></h4>
      <h4><NavLink exact to={ROUTES.LANDING} className='clickable'>Write</NavLink></h4>
      <h4><NavLink to={ROUTES.MAILBOX} className='clickable'>Mailbox</NavLink></h4>
      <h4><NavLink to={ROUTES.DRAFTS}  className='clickable'>Drafts</NavLink></h4>
      <h4><NavLink to={ROUTES.ABOUT} className='clickable'>About</NavLink></h4>
    </div>
  );
}
 
export default Menu;