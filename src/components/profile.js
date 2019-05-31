import React from 'react';



const Profile = ({ logOut }) => {
  return (
    <div className='main'>
      PROFILE
      <h4 className='clickable danger' onClick={logOut}>Log Out</h4>
    </div>
  );
}
 
export default Profile;