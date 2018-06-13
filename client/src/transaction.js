import React, { Component } from 'react';

class Transaction extends Component {
  state = {hidden: true};

  onClick () {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <div className={`transaction ${this.props.data.type}`} onClick={this.onClick.bind(this)}>
        {this.props.data.amount} {this.props.data.type}
        <div className={this.state.hidden ? 'hidden' : ''}>
          <p>
            Id: {this.props.data.id}
          </p>
          <p>
            Date: {this.props.data.date}
          </p>
        </div>
      </div>
    );
  }
}

export default Transaction;
