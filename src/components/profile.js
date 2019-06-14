import React, { Component } from 'react';
import '../css/profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isDeleting: false }
  }

  initDelete = () => this.setState({isDeleting: true})

  cancelDelete = () => this.setState({isDeleting: false})

  deleteAccount = () => {
    this.props.deleteAccount();
    this.setState({isDeleting: false})
  }

  render() { 
    let {displayName, email, logOut} = this.props;

    const deleteMenu = 
      <React.Fragment>
        <h6 className='clickable space--between' onClick={this.cancelDelete}>Don't delete account</h6>
        <h6 className='clickable danger' onClick={this.deleteAccount}>Delete account</h6>
      </React.Fragment>

    return (
      <React.Fragment>
        <div className='main profile'>
          <h4 className='profile__name'>{displayName}</h4>
          <h4 className='profile__email'>{email}</h4>
        </div>
        <div className='context-menu'>
          <h6 className='clickable danger' onClick={logOut}>Log Out</h6>
          {this.state.isDeleting ? 
            deleteMenu
          :
            <h6 className='clickable danger space--between' onClick={this.initDelete}>Delete Account</h6>
          }
          
        </div>
      </React.Fragment>
    );
  }
}
 
export default Profile;