import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Button from './components/Button';
import styles from './App.scss'

console.log(styles);

const cs = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (


      <div>
        <Button>버튼</Button>
      </div>
    );
  }
}

export default App;
