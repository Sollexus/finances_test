import React, { Component } from 'react';
import './App.css';
import Transaction from './transaction';

class App extends Component {
  state = {data: {history: [], balance: 0}};

  componentDidMount() {
    fetch('/transactions')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Finances</h1>
        <h2>Balance: {this.state.data.balance}</h2>
        {
          this.state.data.history.map(ta =>
            <Transaction data={ta} />
          )
        }
      </div>
    );
  }
}

export default App;