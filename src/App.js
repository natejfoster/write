import React, {Component} from 'react';
import { db, auth } from './util/firebase'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Menu from './components/blocks/menu';
import Profile from './components/profile';
import WriteSpace from './components/writeSpace';
import Mailbox from './components/mailbox';
import Drafts from './components/drafts';
import About from './components/about';
import Landing from './components/landing';

import * as ROUTES from './util/routes';

import './css/app.scss';

const history = createBrowserHistory();
const letterCollection = 'letterCollection'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: '',
      loggedIn: false,
      user: {},
      sent: [],
      reccd: []
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

  send = () => {
    let date = Date.now();
    console.log(date);
    let letter = {
      date : date,
      from : this.state.user.displayName,
      fromEmail : this.state.user.email,
      text : "Ava, it truly is great to hear from you! I am glad to hear you are well",
      to : "Ava Green",
      toEmail : "ava@mail.com"
    }
    console.log(letter)
    db.push('letterCollection', {data: letter}).then(console.log('letter sent'))

  }

  startOver = (e) => {
    this.setState({letters: ''});
    e.value = '';
  }

  deleteLetter = (id) => {
    db.remove(letterCollection + '/' + id)
      .then(this.getData)
  }

  logIn = (email, pass) => {
    auth.signInWithEmailAndPassword(email, pass)
    .then((user) => {
      this.setState({loggedIn: true, user: user.user});
      this.getData(this.state.user.email);
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
          this.getData(this.state.user.email);
        })
        .catch(e => console.log(e))
  }

  getData = () => {
    db.fetch('letterCollection', {
      asArray: true, 
      queries: {
        orderByChild: 'fromEmail',
        equalTo: this.state.user.email
      }})
      .then(data => {
        this.setState({sent: data})
      })

      db.fetch('letterCollection', {
        asArray: true, 
        queries: {
          orderByChild: 'toEmail',
          equalTo: this.state.user.email
        }})
        .then(data => {
          this.setState({reccd: data})
        })
  }
    

  render() { 
    return (
      this.state.loggedIn ?
        <Router history={history}>
          <div className='app'>
            <Route exact path={ROUTES.LANDING} render={() => 
              <WriteSpace 
                onChange={this.updateLetter} 
                send={this.send}
                startOver={this.startOver}
              />}  
            />
            <Route path={ROUTES.PROFILE} render={() => <Profile logOut={this.logOut} />} />
            <Route path={ROUTES.MAILBOX} render={() => <Mailbox reccd={this.state.reccd} sent={this.state.sent} delLetter={this.deleteLetter}/>}  />
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
