import React, {Component} from 'react';
import { base } from './base'

import Menu from './components/menu';
import WriteSpace from './components/writeSpace';
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
    this.lettersRef = base.syncState('letters', {
      context: this,
      state: 'letters'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.lettersRef);
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
          <WriteSpace onChange={this.updateLetter.bind(this)}/>
          <Menu username={username}/>
        </div>
      </div>
    );
  }
}
 
export default App;
