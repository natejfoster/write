import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../util/routes';


import '../css/menu.scss';

const Menu = ({username}) => {
  return (
    <div className='menu'>
      <h4 className='menu__item menu__username'><Link to={ROUTES.PROFILE}>{username}</Link></h4>
      <h4 className='menu__item'><Link to={ROUTES.WRITE}>Write</Link></h4>
      <h4 className='menu__item'><Link to={ROUTES.MAILBOX}>Mailbox</Link></h4>
      <h4 className='menu__item'><Link to={ROUTES.DRAFTS}>Drafts</Link></h4>
      <h4 className='menu__item'><Link to={ROUTES.ABOUT}>About</Link></h4>
    </div>
  );
}
 
export default Menu;