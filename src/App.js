import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header counter="133" imie="Ania"></Header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Anno{Date.now()}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header counter="344" pogoda="pochmurnie"/>
        <Counter />
           
            {/*<!--
        <Counter value="44444" />
        <Counter value="55555" />
        <Counter value="12345" />
        <Counter value="77777" />
        <Counter value="77777" />
-->*/}
      </div>
    );
  }
}

export default App;
