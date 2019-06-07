import React, {Component} from 'react';
import { db, auth } from './util/firebase'
import {
  BrowserRouter as Router,
  Route
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
      letter: '',
      loggedIn: false,
      user: {},
      sent: [],
      reccd: [],
      drafts: []
    };
  }

  componentWillUnmount() {
    db.removeBinding(this.letterRef);
  }

  updateLetter = (e) => {
    let value = e.target.value;
    this.setState({letter: value })
  }

  send = (letter, email) => {
    db.fetch('users', {
      asArray: true,
      queries: {
        orderByChild: 'email',
        equalTo: email
      }
    }).then((res) => {
      let date = Date.now();
      
      let newLetter = {
        date: date,
        from: this.state.user.displayName,
        fromEmail: this.state.user.email,
        text: letter,
        to: res[0].displayName,
        toEmail: email
      }
      db.push('letterCollection', {data: newLetter})
    })
  }

  startOver = (e) => {
    this.setState({letter: ''});
    e.value = '';
    e.focus();
  }

  deleteLetter = (id) => {
    db.remove(letterCollection + '/' + id)
  }

  deleteDraft = (id) => {
    db.remove(`users/${this.state.user.uid}/drafts/${id}`)
  }

  editDraft = (draft) => {
    // save current edit if currently editing
    this.setState({letter: draft.text});
  }

  saveDraft = (draftText) => {
    let draft = {
      date: Date.now(),
      text: draftText
    }
    db.push(`users/${this.state.user.uid}/drafts`, {data: draft});
    this.setState({letter: ''});
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
          res.user.updateProfile({displayName: name})
          .then(() => {
            this.setState({loggedIn: true, user: res.user});
            this.getData(this.state.user.email);
  
            let newUser = {
              displayName: this.state.user.displayName,
              email: this.state.user.email,
              letter: '',
              drafts: {}
            }
  
            db.post(`users/${this.state.user.uid}`, {data: newUser})
          });
        })
        .catch(e => console.log(e))
  }

  getData = () => {
    db.bindToState('letterCollection', {
      context: this,
      state: 'sent',
      asArray: true, 
      queries: {
        orderByChild: 'fromEmail',
        equalTo: this.state.user.email,
      }
    })

    db.bindToState('letterCollection', {
      context: this,
      state: 'reccd',
      asArray: true, 
      queries: {
        orderByChild: 'toEmail',
        equalTo: this.state.user.email
      }
    })

    db.bindToState(`users/${this.state.user.uid}/drafts`, {
      context: this,
      state: 'drafts',
      asArray: true
    })

    this.letterRef = db.syncState(`users/${this.state.user.uid}/letter`, {
      context: this,
      state: 'letter'
    });
  }
    

  render() { 
    let {user, drafts, letter, reccd, sent} = this.state;
    return (
      this.state.loggedIn ?
        <Router history={history}>
          <div className='app'>
            <Route exact path={ROUTES.LANDING} render={() => 
              <WriteSpace
                text={letter}
                onChange={this.updateLetter} 
                saveDraft={this.saveDraft}
                send={this.send}
                startOver={this.startOver}
              />}  
            />
            <Route path={ROUTES.PROFILE} render={() => <Profile logOut={this.logOut} email={user.email} displayName={user.displayName}/>} />
            <Route path={ROUTES.MAILBOX} render={() => <Mailbox reccd={reccd} sent={sent} delLetter={this.deleteLetter}/>}  />
            <Route path={ROUTES.DRAFTS} render={() => <Drafts curLetter={letter} drafts={drafts} editDraft={this.editDraft} delDraft={this.deleteDraft}/>} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Menu username={user.displayName}/>
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
