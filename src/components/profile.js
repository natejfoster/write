import React from 'react';
import '../css/profile.scss';



const Profile = ({ logOut, email, displayName }) => {
  return (
    <React.Fragment>
      <div className='main profile'>
        <h4 className='profile__name'>{displayName}</h4>
        <h4 className='profile__email'>{email}</h4>
      </div>
      <div className='context-menu'>
        <h6 className='clickable danger' onClick={logOut}>Log Out</h6>
      </div>
    </React.Fragment>

  );
}
 
export default Profile;