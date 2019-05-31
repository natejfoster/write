import React, {Component} from 'react';
import { db, auth } from './util/firebase'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Menu from './components/menu';
import Profile from './components/profile';
import WriteSpace from './components/writeSpace';
import Mailbox from './components/mailbox';
import Drafts from './components/drafts';
import About from './components/about';
import Landing from './components/landing';

import * as ROUTES from './util/routes';

import './css/app.scss';

const username = 'John Smith';
const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: '',
      loggedIn: false,
      user: {}
    };
  }

  componentWillMount() {
    this.lettersRef = db.syncState('letters', {
      context: this,
      state: 'letters'
    });
  }

  componentWillUnmount() {
    db.removeBinding(this.lettersRef);
  }

  updateLetter = (e) => {
    let value = e.target.value;
    console.log(value);
    this.setState({letters: value })
  }

  logIn = (email, pass) => {
    auth.signInWithEmailAndPassword(email, pass)
    .then((user) => {
      this.setState({loggedIn: true, user: user.user});
    })  
    .catch(e => console.log(e));
  }

  logOut = () => {
    auth.signOut()
        .then(() => {
          this.setState({loggedIn: false});
          history.push('/');
        })
        .catch(e => console.log(e));
  }

  signUp = (email, pass, name) => {
    auth.createUserWithEmailAndPassword(email, pass)
        .then((res) => {
          res.user.updateProfile({displayName: name});
          this.setState({loggedIn: true, user: res.user});
        })
        .catch(e => console.log(e))
  }

  render() { 
    return (
      this.state.loggedIn ?
        <Router history={history}>
          <div className='app'>
            <Route exact path={ROUTES.LANDING} component={WriteSpace} />
            <Route path={ROUTES.PROFILE} render={() => <Profile logOut={this.logOut} />} />
            <Route path={ROUTES.MAILBOX} component={Mailbox} />
            <Route path={ROUTES.DRAFTS} component={Drafts} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Menu username={this.state.user.displayName}/>
          </div>
        </Router>
      :
        <Router>
          <div className='app'>
            <Route path={ROUTES.LANDING} render={() => <Landing logIn={this.logIn} signUp={this.signUp} />} />
          </div>
        </Router>
    );
  }
}
 
export default App;
