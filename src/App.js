import React, {Component} from 'react';
import { db } from './util/firebase'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Menu from './components/menu';
import Profile from './components/profile';
import WriteSpace from './components/writeSpace';
import Mailbox from './components/mailbox';
import Drafts from './components/drafts';
import About from './components/about';
import Login from './components/login';

import * as ROUTES from './util/routes';

import './css/app.scss';

const username = 'John Smith';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ''
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

  render() { 
    return (
      <Router>
        <div className='app'>
          <Menu username={username}/>
          <div className='container'>
            <Route exact path={ROUTES.LANDING} component={Login} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.WRITE} component={WriteSpace} />
            <Route path={ROUTES.MAILBOX} component={Mailbox} />
            <Route path={ROUTES.DRAFTS} component={Drafts} />
            <Route path={ROUTES.ABOUT} component={About} />
          </div>
        </div>
      </Router>

    );
  }
}
 
export default App;
