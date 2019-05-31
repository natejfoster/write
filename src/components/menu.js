import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../util/routes';


import '../css/menu.scss';

const Menu = ({username}) => {
  return (
    <div className='menu'>
      <h4 className='clickable menu__username'><NavLink to={ROUTES.PROFILE}>{username}</NavLink></h4>
      <h4 className='clickable'><NavLink exact to={ROUTES.LANDING}>Write</NavLink></h4>
      <h4 className='clickable'><NavLink to={ROUTES.MAILBOX}>Mailbox</NavLink></h4>
      <h4 className='clickable'><NavLink to={ROUTES.DRAFTS}>Drafts</NavLink></h4>
      <h4 className='clickable'><NavLink to={ROUTES.ABOUT}>About</NavLink></h4>
    </div>
  );
}
 
export default Menu;