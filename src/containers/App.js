import React, { Component } from 'react';
import './App.css';
import Header from '../components/header'
import TodoTextInput from '../components/todotextinput'
import TodoTextEdit from '../components/todotextedit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoTextInput />
        <TodoTextEdit />
      </div>
    );
  }
}

export default App;
