import React, {Component} from 'react';
import { db } from './firebase'

import Menu from './components/menu';
import WriteSpace from './components/writeSpace';
import About from './components/about';
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
      <div className='app'>
        <div className='container'>
          <About />
          <Menu username={username}/>
        </div>
      </div>
    );
  }
}
 
export default App;
